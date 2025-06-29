const UserNameInput = ({ UserName, onChangeUserName }) => {
  return (
     <div className="w-full max-w-md mx-auto">
      <label className="input validator w-full" htmlFor="name">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="name"
          value={UserName}
          onChange={onChangeUserName}
          minLength="3"
          maxLength="30"
          autoComplete="name"
          className="w-full h-10 px-3 pr-0 text-sm"
        />
      </label>
      {/* <p className="validator-hint">
        Must be 3 to 30 characters
        <br />
        containing only letters, numbers or dash
      </p> */}
    </div>
  );
};

export default UserNameInput;
