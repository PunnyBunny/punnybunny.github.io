import React from "react";

const ContactsBar: React.FC = () => {
  return (
    <div className="w-full bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface text-center py-2 text-sm">
      <p>
        Contact:{" "}
        <a href="mailto:sunnycheungabc@gmail.com">sunnycheungabc@gmail.com</a> |
        +1 (123) 456-7890
      </p>
    </div>
  );
};

export default ContactsBar;
