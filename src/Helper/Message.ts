import React from "react";

export interface IMessageStyles {
    chatCard: React.CSSProperties,
    avatar: React.CSSProperties,
    sender: React.CSSProperties,
    message: React.CSSProperties,
    timestamp: React.CSSProperties,
    badge: React.CSSProperties,
}

export interface IMessageProps {
    sender: string;
    message: string;
    timestamp: string;
    unreadCount?: number;
  }