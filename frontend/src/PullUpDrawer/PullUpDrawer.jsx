import React, { useState } from "react";
import { motion } from "framer-motion";
import CalendarCircle from "../CalendarCircle/CalendarCircle";
import ExerciseScroll from "../ExerciseScroll/ExerciseScroll";

const PullUpDrawer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const drawerHeight = isExpanded ? "84vh" : "55vh";

  const handleDragEnd = (event, info) => {
    if (info.point.y < window.innerHeight * 0.5) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      initial={{ y: 0 }}
      animate={{ height: drawerHeight }}
      transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: drawerHeight,
        backgroundColor: "#D9D9D9", 
        boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        padding: "16px",
        overflowY: "hidden", 
        overflowX: "hidden", 
        
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div
          style={{
            width: "40px",
            height: "5px",
            backgroundColor: "#ccc",
            borderRadius: "5px",
            margin: "0 auto",
            cursor: "pointer",
          }}
        ></div>
      </div>
      {/* Calendar Component */}
      <CalendarCircle />
      <ExerciseScroll/>
      {/* Additional Drawer Content */}
      <div style={{ marginTop: '30px' }}>
      </div>
    </motion.div>
  );
};

export default PullUpDrawer;
