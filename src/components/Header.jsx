import React, { useState } from "react";

const Header = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        margin: 0,
        zIndex: 1000,
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
        }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "30px",
          }}>
          <button
            onClick={toggleDialog}
            style={{
              padding: "10px 40px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}>
            Display
          </button>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}>
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}>
                <label
                  htmlFor="grouping"
                  style={{ marginRight: "30px", color: "grey" }}>
                  Grouping
                </label>
                <select
                  id="grouping"
                  value={grouping}
                  onChange={(e) => onGroupingChange(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    width: "120px",
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "10px",
                    marginLeft: "70px",
                  }}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}>
                <label
                  htmlFor="ordering"
                  style={{ marginRight: "30px", color: "grey" }}>
                  Ordering
                </label>
                <select
                  id="ordering"
                  value={ordering}
                  onChange={(e) => onOrderingChange(e.target.value)}
                  style={{
                    padding: "8px",
                    borderRadius: "5px",
                    width: "120px",
                    fontWeight: "bold",
                    color: "black",
                    marginTop: "5px",
                    marginLeft: "73px",
                  }}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
