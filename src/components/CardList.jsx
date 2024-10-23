import React from "react";
import Card from "./Card";
import { tickets, users } from "../utilities/users"; // Assuming the data is exported from users.js

const CardList = ({ grouping, ordering }) => {
  const groupTickets = (tickets) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const groupKey = ticket[grouping];
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (ordering === "priority") {
        return b.priority - a.priority;
      } else if (ordering === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "100px",
        backgroundColor: "#E6E6E6",
        overflowY: "auto",
      }}>
      {Object.keys(groupedTickets).map((groupKey) => {
        const sortedTickets = sortTickets(groupedTickets[groupKey]);
        return (
          <div key={groupKey} style={{ width: "20%", margin: "5px" }}>
            <h2>{groupKey}</h2>
            {sortedTickets.map((ticket) => {
              const user = users.find((user) => user.id === ticket.userId);
              return <Card key={ticket.id} ticket={ticket} user={user} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
