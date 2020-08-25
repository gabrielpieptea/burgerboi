import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addCheese,
  addOnions,
  addPickles,
  addSalad,
  addBacon,
  addTomatoes,
  addMeat,
} from '../features/burger'

const Menu = () => {
  const [content, setContent] = useState([])
  const [buttonContent, setButtonContent] = useState([])
  const dispatch = useDispatch()
  const { cheese, onions, pickles, salad, bacon, tomatoes, meat } = useSelector(
    (state) => state.burger
  )
  const removeLast = () => {
    content.splice(-1, 1)
    setContent([...content])
  }

  const addIngredient = (value) => {
    switch (value) {
      case 'cheese':
        setContent([
          ...content,
          <>
            <div className='Cheese'></div>
            <div className='Cheese'></div>
          </>,
        ])

        break
      case 'salad':
        setContent([...content, <div className='Salad'></div>])
        break
      case 'bacon':
        setContent([...content, <div className='Bacon'></div>])
        break
      case 'meat':
        setContent([...content, <div className='Meat'></div>])
        break
      case 'pickles':
        setContent([...content, <div className='Pickles'></div>])
        break
      case 'tomatoes':
        setContent([...content, <div className='Tomatoes'></div>])
        break
      case 'onions':
        setContent([...content, <div className='Onions'></div>])
        break
      case 'meat':
        setContent([...content, <div className='Meat'></div>])
      default:
        setContent([...content])
        break
    }
  }

  /////////////

  return (
    <div>
      <p>Make a choice</p>
      <div className='menuWrapper'>
        <div className='drinks'>
          <div className='choiceContainer'>
            {/* <button onClick={addCola}>Cola</button>
            <button onClick={addFanta}>Fanta</button>
            <button onClick={addPepsi}>Pepsi</button> */}
          </div>
          {/* <div className='currentChoice'>{ordered}</div> */}
        </div>

        <div className='burger'>
          <div className='burgerConfig'>
            <button
              onClick={() => {
                dispatch(addCheese(3))

                addIngredient('cheese')
              }}
            >
              Add Cheese
            </button>
            <button
              onClick={() => {
                dispatch(addOnions())
                addIngredient('onions')
              }}
            >
              Add Onions
            </button>
            <button
              onClick={() => {
                dispatch(addPickles())

                addIngredient('pickles')
              }}
            >
              Add Pickles
            </button>

            <button
              onClick={() => {
                dispatch(addSalad())
                addIngredient('salad')
              }}
            >
              Add Salad
            </button>

            <button
              onClick={() => {
                addTomatoes()
                addIngredient('tomatoes')
              }}
            >
              Add Tomatoes
            </button>

            <button
              onClick={() => {
                dispatch(addBacon())
                addIngredient('bacon')
              }}
            >
              Add Bacon
            </button>
            <button
              onClick={() => {
                dispatch(addMeat())
                addIngredient('meat')
              }}
            >
              Add Meat
            </button>
          </div>
          <button onClick={removeLast}>DELETE LAST ITEM ADDED</button>
        </div>
      </div>
      <div className='burgerWrapper'>
        <div className='burgerPreview'>
          <div className='BreadTop'>
            <div className='Seeds2'></div>
            <div className='Seeds1'></div>
          </div>
          {content}
          <div className='BreadBottom'></div>
        </div>
        <div className='deleteMenu'>{buttonContent}</div>
      </div>
    </div>
  )
}

export default Menu
