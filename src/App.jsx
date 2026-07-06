import { useState,useRef } from 'react';

export default function App() {
const nameRef = useRef(null);

function handleSubmit(){
alert(nameRef. current. value);
}

return (
<div style={styles.card}>
<input ref={nameRef} placeholder="Enter your name" style={styles.input} />
<button style={styles.btn} onClick={handleSubmit}>Submit</button>
</div>
);
}
const styles = {
card: { fontFamily: "system-ui", maxWidth: 360, margin: "40px auto", padding: 24,
borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,.08)" },
input: { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc",
fontSize: 15, boxSizing: "border-box", marginBottom: 12 },
btn: { padding: "10px 16px", border: "none", borderRadius: 8, background: "#2ed573",
color: "white", cursor: "pointer" },
};