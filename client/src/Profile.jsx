import { useEffect, useState } from "react";
import { api } from "./api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile");
        setUser(res.data);
      } catch (err) {
        console.log(err.response?.data?.msg);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;
  return <div>Welcome {user.username} | Email: {user.email}</div>;
}
