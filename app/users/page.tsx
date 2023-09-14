interface User {
  id: number;
  name: string;
  email: string;
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
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="table table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr className="hover" key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
