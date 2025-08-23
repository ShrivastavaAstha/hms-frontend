import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./AdminAnnouncementForm.css";

const AdminAnnouncementForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/emails/send-announcement", { subject, message });
      toast.success("Emails sent to all users!");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send emails");
    }
  };

  return (
    <div className="announcement-form">
      <h2>📢 Send Announcement to All Users</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          rows={5}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default AdminAnnouncementForm;
