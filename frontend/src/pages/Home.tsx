import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column" gap={6}>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: { md: "1.05fr 0.95fr", xs: "1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "stretch",
        }}
      >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 12,
                border: "1px solid rgba(56,189,248,0.35)",
                bgcolor: "rgba(56,189,248,0.12)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip label="DeciZen AI" variant="outlined" sx={{ color: "var(--text)", borderColor: "rgba(255,255,255,0.18)", bgcolor: "rgba(56,189,248,0.12)", fontWeight: 600, letterSpacing: "0.04em" }} />
            <Chip label="Realtime" sx={{ color: "#0b1224", bgcolor: "#38bdf8", fontWeight: 700, letterSpacing: "0.05em" }} />
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 700, lineHeight: 1.1 }}>
              Design vivid, 3D-feel conversations
            </Typography>
            <TypingAnim />
            <Typography sx={{ color: "var(--muted)", maxWidth: "48ch" }}>
              Launch DeciZen AI with live context, shareable threads, and 3D-inspired UI touches. Crafted for teams shipping fast but caring about taste.
            </Typography>
          </Box>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} divider={<Divider flexItem orientation="vertical" sx={{ borderColor: "rgba(255,255,255,0.08)" }} />}>
            <Box>
              <Typography variant="h6" fontWeight={700}>Fast setup</Typography>
              <Typography sx={{ color: "var(--muted)" }}>Auth, routing, and chat wired up out of the box.</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={700}>Code-ready</Typography>
              <Typography sx={{ color: "var(--muted)" }}>Rich responses render text and code with syntax highlighting.</Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={700}>Secure by default</Typography>
              <Typography sx={{ color: "var(--muted)" }}>Cookie-backed auth flow with protected chat routes.</Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateRows: "1fr",
            gap: 3,
            justifyItems: "center",
          }}
        >
          <Box
            className="tilt-card float-soft"
            sx={{
              width: "100%",
              minHeight: 360,
              borderRadius: "22px",
              background: "linear-gradient(155deg, rgba(56,189,248,0.26), rgba(96,165,250,0.2) 60%, rgba(7,16,34,0.92))",
              border: "1px solid var(--stroke)",
              boxShadow: "0 40px 90px rgba(0,0,0,0.45)",
              position: "relative",
              overflow: "hidden",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.05), transparent)", mixBlendMode: "screen" }} />
            <img
              src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2025/03/marquee-agentforce-ai-chatbot.png?w=1024"
              alt="DeciZen AI experience"
              style={{ width: "88%", maxWidth: 880, borderRadius: "18px", boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
          gap: 3,
        }}
      >
        {["Threaded conversations", "Typing effects", "Assistant memory"].map((title, index) => (
          <Box
            key={title}
            sx={{
              p: 3,
              borderRadius: 18,
              border: "1px solid var(--stroke)",
              bgcolor: index === 1 ? "rgba(56,189,248,0.12)" : "rgba(10,14,26,0.85)",
              boxShadow: "var(--shadow)",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={1}>{title}</Typography>
            <Typography sx={{ color: "var(--muted)" }}>
              {index === 0 && "Scroll through past exchanges with smooth, readable chat items."}
              {index === 1 && "Re-usable type animation for playful hero copy."}
              {index === 2 && "Authenticate once, stay in a protected chat route with persistent history."}
            </Typography>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;