interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store" // Nextjs中使用fetch默认会缓存（使用其他第三方库不会缓存），这个配置是不缓存
    next: { revalidate: 10 }, // 缓存时间为10s
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>UsersPage</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
