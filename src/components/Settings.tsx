// src/components/Settings.tsx
"use client";

import React from "react";

const Settings: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`p-2 border border-gray-300 rounded ${className}`}>
      Ayarlar
    </div>
  );
};

export default Settings;
