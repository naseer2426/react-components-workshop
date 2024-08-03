import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <div className="flex items-center justify-center p-5">
        <h1 className="text-4xl">React Components</h1>
      </div>
      <div className="fixed top-0 flex w-screen h-screen items-center justify-center flex-col gap-4">
        <ButtonSection />
        <CardSection />
      </div>
    </>
  )
}

// Task 1: Improve this by making one component for all buttons
function ButtonSection() {
  const [actionValue, setActionValue] = useState('')
  return (
    <>
      <div className="text-2xl">Button Section</div>
      <div className="flex flex-col w-1/5">
        <p>Action</p>
        <input disabled value={actionValue} className='bg-white text-black'></input>
      </div>
      {/* Create, Delete, Update buttons */}
      <div className="flex flex-row gap-5">
        <CreateButton callback={setActionValue}></CreateButton>
        <DeleteButton callback={setActionValue}></DeleteButton>
        <UpdateButton callback={setActionValue}></UpdateButton>
      </div>
    </>
  )
}

function CreateButton(props) {
  return (
    <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
      <button onClick={() => { props.callback('create') }}>Create</button>
    </div>
  )
}

function DeleteButton(props) {
  return (
    <div className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
      <button onClick={() => { props.callback('delete') }}>Delete</button>
    </div>
  )
}

function UpdateButton(props) {
  return (
    <div className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>
      <button onClick={() => { props.callback('update') }}>Update</button>
    </div>
  )
}

/*
Task 2:

Improve this code so we can add more cards using a data array like
[
    {
      title: "Card Title 1",
      subtitle: "Card subtitle 1",
      image: "https://via.placeholder.com/400x200",
      description: "Description for card 1."
    },
    {
      title: "Card Title 2",
      subtitle: "Card subtitle 2",
      image: "https://via.placeholder.com/400x200",
      description: "Description for card 2."
    },
    {
      title: "Card Title 3",
      subtitle: "Card subtitle 3",
      image: "https://via.placeholder.com/400x200",
          description: "Description for card 3."
    }
  ];

*/

function CardSection() {
  return (
    <>
      <div className="text-2xl">Card Section</div>

      <div className="flex flex-row gap-5">
        {/* Card 1 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image" />
          <div className="p-4">
            <div className="font-bold text-xl text-black mb-2">Card 1</div>
            <p className="text-gray-700 text-base mb-4">Card subtitle 1</p>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
              onClick={() => console.log("Button clicked")}
            >
              <h1>Button</h1>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image" />
          <div className="p-4">
            <div className="font-bold text-xl  text-black mb-2">Card Title 2</div>
            <p className="text-gray-700 text-base mb-4">Card subtitle 2</p>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
              onClick={() => console.log("Button clicked")}
            >
              <h1>Button</h1>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image" />
          <div className="p-4">
            <div className="font-bold text-xl  text-black mb-2">Card Title 3</div>
            <p className="text-gray-700 text-base mb-4">Card subtitle 3</p>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
              onClick={() => console.log("Button clicked")}
            >
              <h1>Button</h1>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src="https://via.placeholder.com/400x200" alt="Card Image" />
          <div className="p-4">
            <div className="font-bold text-xl  text-black mb-2">Card Title 4</div>
            <p className="text-gray-700 text-base mb-4">Card subtitle 4</p>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
              onClick={() => console.log("Button clicked")}
            >
              <h1>Button</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}



export default App
