"use client";

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff", color: "#071a2e", fontFamily: "Arial, sans-serif" }}>
        <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "24px", textAlign: "center" }}>
          <div>
            <p style={{ color: "#155eef", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>S.N Group</p>
            <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1, margin: "20px auto", maxWidth: "12ch" }}>Something unexpected interrupted the page.</h1>
            <p style={{ color: "rgba(7,26,46,.65)", lineHeight: 1.7, margin: "0 auto 28px", maxWidth: "34rem" }}>Please try again. If the problem continues, contact query@sngroup.com.</p>
            <button onClick={retry} style={{ background: "#155eef", border: 0, borderRadius: "999px", color: "#fff", cursor: "pointer", fontWeight: 700, minHeight: "44px", padding: "12px 22px" }} type="button">Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
