function inputfield({
    label,
    type,
  })    {
      return(
        <>
        <div className="">
            <input 
                id={label}
                name={label}
                type={type}
                placeholder={label}
                className='py-3 px-6 rounded-lg placeholder:text-base w-full'
            />
            <label
                className={`font-inter text-lg text-black font-light`}
            >
            
            </label>
        </div>
        </>
      )
  }
  export default inputfield;