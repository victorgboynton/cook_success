export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center mx-auto">
      <div className="bg-emerald-400 px-20 py-10 rounded-xl">
        <h1 className="text-center text-xl font-pacifico items-center">
          Welcome!
        </h1>
        <form className="flex flex-col">
          <p>Username: </p>
          <input type="text" placeholder="Username" className="rounded" />
          <p className="">Password:</p>
          <input type="password" placeholder="Password" className="rounded" />
          <button className="py-fill bg-emerald-700 my-4 text-2xl font-extrabold text-white rounded border-2 border-black">
            Login
          </button>
          <div className="flex flex-row text-xs gap-1">
            <button>Forgot Username? </button>
            <button>Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
}
