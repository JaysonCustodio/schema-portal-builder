import React from "react";

export const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const body: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  minHeight: "94vh",
};

export const header: React.CSSProperties = {
  padding: 20,
  color: "#c8e3e3",
  backgroundColor: "#040a0e",
  borderBottomColor: "#132e2e",
  borderBottom: "1px solid #132e2e",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const label_status: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: 1,
  fontWeight: "bold",
};

export const title: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const loader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: 12,
  marginLeft: 20,
};
