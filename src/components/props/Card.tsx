import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>;
};

interface SubComponentProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className = "" }: SubComponentProps) => (
  <div className={`flex items-center justify-between ${className}`}>
    {children}
  </div>
);

const Body = ({ children, className = "" }: SubComponentProps) => (
  <div className={className}>{children}</div>
);

const Footer = ({ children, className = "" }: SubComponentProps) => (
  <div className={className}>{children}</div>
);

// Attach them to the Card object for easy access
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
