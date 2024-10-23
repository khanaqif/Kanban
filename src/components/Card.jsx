import React from "react";
import { tickets, users } from "../utilities/users";

const Card = ({ ticket, user }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardHeader}>
        <span style={styles.ticketId}>{ticket.id}</span>
        <img style={styles.userAvatar} src={user.profile_pic} alt={user.name} />
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.ticketTitle}>{ticket.title}</h3>
      </div>
      <div style={styles.cardFooter}>
        <div style={styles.priorityIcon}>
          <span>❗</span>
        </div>
        <div style={styles.tag}>
          <span style={styles.tagLabel}>{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  cardContainer: {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "8px",
    backgroundColor: "white",
    width: "120px",
    height: "150px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
    margin: "5px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ticketId: {
    fontSize: "10px",
    color: "#888",
  },
  userAvatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  cardBody: {
    marginTop: "4px",
  },
  ticketTitle: {
    fontSize: "12px",
    fontWeight: "500",
    margin: "0",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
  },
  priorityIcon: {
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    padding: "2px",
    marginRight: "4px",
  },
  tag: {
    backgroundColor: "#f0f0f0",
    borderRadius: "12px",
    padding: "2px 6px",
  },
  tagLabel: {
    fontSize: "10px",
    color: "#888",
  },
};

export default Card;
