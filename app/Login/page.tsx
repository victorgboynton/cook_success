export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center mx-auto my-auto">
      <div className="bg-green-500 p-20 rounded-xl">
        <h1 className="text-center text-xl">Welcome!</h1>
        <form className="flex flex-col">
          <p>Username: </p>
          <input type="text" placeholder="Username" className="rounded" />
          <p className="">Password:</p>
          <input type="password" placeholder="Password" className="rounded" />
          <div className="flex flex-row text-xs">
            <button>Forgot Username? </button>
            <button>Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
}
