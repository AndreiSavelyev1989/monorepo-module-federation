export const UserCard = ({ username }: { username?: string }) => {
  return (
    <div style={{ border: "2px solid green", padding: 20, width: 200 }}>
      <div>username: {username ?? "user"} </div>
      <div>password: 123</div>
    </div>
  );
};
