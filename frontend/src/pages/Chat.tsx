  import  { useEffect, useLayoutEffect, useRef, useState } from "react";
  import { Box, Avatar, Typography, Button, IconButton, Chip, Divider, Stack } from "@mui/material";
  import { red } from "@mui/material/colors";
  import { useAuth } from "../context/AuthContext";
  import ChatItem from "../components/chat/ChatItem";
  import { IoMdSend } from "react-icons/io";
  import { useNavigate } from "react-router-dom";
  import {deleteUserChats,getUserChats,sendChatRequest,} from "../helpers/api-communicator";
  import toast from "react-hot-toast";


  type Message = {
    role: "user" | "assistant";
    content: string;
  };


  const Chat = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);


    const handleSubmit = async () => {
      const content = (inputRef.current?.value || "").trim();
      if (!content) return;
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
      const newMessage: Message = { role: "user", content };
      setChatMessages((prev) => [...prev, newMessage]);
      const chatData = await sendChatRequest(content);
      setChatMessages([...chatData.chats]);
    };


    const handleDeleteChats = async () => {
      try {
        toast.loading("Deleting Chats", { id: "deletechats" });
        await deleteUserChats();
        setChatMessages([]);
        toast.success("Deleted Chats Successfully", { id: "deletechats" });
      } catch (error) {
        console.log(error);
        toast.error("Deleting chats failed", { id: "deletechats" });
      }
    };


    useLayoutEffect(() => {
      if (auth?.isLoggedIn && auth.user) {
        toast.loading("Loading Chats", { id: "loadchats" });
        getUserChats()
          .then((data) => {
            setChatMessages([...data.chats]);
            toast.success("Successfully loaded chats", { id: "loadchats" });
          })
          .catch((err) => {
            console.log(err);
            toast.error("Loading Failed", { id: "loadchats" });
          });
      }
    }, [auth]);

    
    useEffect(() => {
      if (!auth?.user) {
        navigate("/login");
      }
    }, [auth]);


    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "320px 1fr", xs: "1fr" },
          gap: 3,
          width: "100%",
          mt: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            borderRadius: 8,
            border: "1px solid var(--stroke)",
            bgcolor: "rgba(11,18,36,0.9)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "#22d3ee", color: "#0b1224", fontWeight: 700 }}>
              {auth?.user?.name?.split(' ')[0]?.[0]}
              {auth?.user?.name?.split(' ')[1]?.[0] || ''}
            </Avatar>
            <Box>
              <Typography fontWeight={700}>{auth?.user?.name || "Guest"}</Typography>
              <Typography sx={{ color: "var(--muted)", fontSize: "14px" }}>Ready to chat</Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography fontWeight={700}>Shortcuts</Typography>
            <Typography sx={{ color: "var(--muted)" }}>Send messages, share code, or ask follow-ups.</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {["Brainstorm", "Fix my code", "Summarize", "Explain"]
                .map(label => (
                  <Chip key={label} label={label} variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.15)", color: "var(--text)", bgcolor: "rgba(56,189,248,0.12)" }} />
                ))}
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <Button
            onClick={handleDeleteChats}
            fullWidth
            sx={{
              mt: 1,
              color: "#05101c",
              fontWeight: "700",
              borderRadius: 12,
              bgcolor: "#38bdf8",
              textTransform: "none",
              ":hover": { bgcolor: "#60a5fa" },
            }}
          >
            Clear conversation
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: { xs: 2, md: 3 },
            borderRadius: 8,
            border: "1px solid var(--stroke)",
            bgcolor: "rgba(11,18,36,0.9)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <Typography variant="h5" fontWeight={700}>Chat canvas</Typography>
              <Typography sx={{ color: "var(--muted)" }}>Model responses with syntax-aware rendering.</Typography>
            </div>
            <Chip label="GPT 3.5 Turbo" sx={{ bgcolor: "rgba(56,189,248,0.18)", color: "#38bdf8", fontWeight: 700 }} />
          </Box>

            <Box
              sx={{
                width: "100%",
                minHeight: "50vh",
                maxHeight: "65vh",
                borderRadius: 6,
                px: 1,
                py: 0.5,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                scrollBehavior: "smooth",
                gap: 1,
                border: "1px solid var(--stroke)",
                bgcolor: "rgba(11,16,28,0.82)",
              }}
            >
            {chatMessages.length === 0 && (
              <Box sx={{ display: "grid", placeItems: "center", height: "100%", color: "var(--muted)" }}>
                <Typography>Start the conversation — ask anything.</Typography>
              </Box>
            )}
            {chatMessages.map((chat, index) => (
              //@ts-ignore
              <ChatItem content={chat.content} role={chat.role} key={index} />
            ))}
          </Box>

          <Box
            sx={{
              width: "100%",
              borderRadius: 6,
              backgroundColor: "rgba(11,16,28,0.9)",
              display: "flex",
              alignItems: "center",
              border: "1px solid var(--stroke)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Message the assistant..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                padding: "20px 18px",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "18px",
              }}
            />
            <IconButton onClick={handleSubmit} sx={{ color: "#38bdf8", mr: 1.5 }}>
              <IoMdSend />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  export default Chat;