import useForm from "./lib/useForm";

const App = () => {
  const {
    checkbox,
    setCheckbox,
    formData,
    handleChange,
    handleSubmit,
    error,
    submit,
  } = useForm();

  return (
    <section className='h-screen bg-black flex flex-col items-center justify-center'>
      {Object.keys(error).length === 0 && submit ? (
        <div className='text-white flex flex-col items-center justify-center gap-2'>
          <h1 className='text-lg text-white/60'>registered successfully</h1>
          <h2 className='text-sm'> name is : {formData.name}</h2>
          <h2 className='text-sm'> age is : {formData.age}</h2>
          <h2 className='text-sm'> email is : {formData.email}</h2>
          {checkbox && (
            <h2 className='text-sm'>guest name is : {formData.guestName}</h2>
          )}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-white text-xl'>Event Registration Form</h1>
          <div className=''>
            <form
              className='w-[500px] h-[500px] bg-slate-800 flex flex-col items-center justify-center gap-3'
              onSubmit={handleSubmit}
            >
              <input
                placeholder='Name'
                id='name'
                className='bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'
                type='text'
                onChange={handleChange}
              />
              <p className='text-red-700'>{error.name}</p>
              <input
                placeholder='Email'
                id='email'
                className='bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'
                type='email'
                onChange={handleChange}
              />
              <p className='text-red-700'>{error.email}</p>
              <input
                placeholder='Age'
                id='age'
                className='bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'
                type='number'
                onChange={handleChange}
              />
              <p className='text-red-700'>{error.age}</p>

              {checkbox && (
                <input
                  placeholder='Enter Guest Name'
                  id='guestName'
                  className='bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'
                  type='text'
                  onChange={handleChange}
                />
              )}
              <p className='text-red-700'>{error.guestName}</p>

              <label className='has-[:checked]:bg-white/30 has-[:checked]:text-[#292929] has-[:checked]:ring-[#292929] has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 p-4 rounded-md flex justify-between items-center shadow'>
                <div className='flex items-center space-x-5'>
                  <h2 className='text-base'>Are you attending with a guest?</h2>
                </div>

                <input
                  type='checkbox'
                  name='payment'
                  className='checked:border-[#292929] h-5 w-5'
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
              </label>

              <button className='bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;

