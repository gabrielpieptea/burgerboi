import React, { useState, useEffect } from 'react'
import { addCola, addFanta, addPepsi } from '../store/actions/addToOrder'
import {
  addCheese,
  addKetchup,
  addMayo,
  addOnions,
  addPickles,
  addSalad,
  addBacon,
  addSpicy,
  addMeat,
  addTomatoes,
} from '../store/actions/burger'
import { connect } from 'react-redux'
const Menu = ({
  addPepsi,
  addCola,
  addFanta,
  ordered,
  addCheese,
  addKetchup,
  addMayo,
  addOnions,
  addPickles,
  addSalad,
  addBacon,
  addSpicy,
  addTomatoes,
  addMeat,
  burger: {
    cheese,
    ketchup,
    mayo,
    onions,
    pickles,
    salad,
    bacon,
    spicy,
    tomatoes,
    meat,
  },
}) => {
  const [content, setContent] = useState([])
  const [buttonContent, setButtonContent] = useState([])
  const removeLast = () => {
    content.splice(-1, 1)
    setContent([...content])
  }

  const removeElement = () => {
    // buttonContent.forEach((element) => console.log(element))
    console.log(content)
  }
  // useEffect(() => {
  //   if (content.length !== 0)
  //     setButtonContent([
  //       ...buttonContent,
  //       <button onClick={() => removeElement()}>Remove</button>,
  //     ])
  // }, [content])

  const addIngredient = (value) => {
    switch (value) {
      case 'cheese':
        setContent([...content, <div className='Cheese'></div>])

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
            <button onClick={addCola}>Cola</button>
            <button onClick={addFanta}>Fanta</button>
            <button onClick={addPepsi}>Pepsi</button>
          </div>
          <div className='currentChoice'>{ordered}</div>
        </div>

        <div className='burger'>
          <div className='burgerConfig'>
            <button
              onClick={() => {
                addCheese()
                addIngredient('cheese')
              }}
            >
              Add Cheese
            </button>
            <button
              onClick={() => {
                addOnions()
                addIngredient('onions')
              }}
            >
              Add Onions
            </button>
            <button
              onClick={() => {
                addPickles()
                addIngredient('pickles')
              }}
            >
              Add Pickles
            </button>

            <button
              onClick={() => {
                addSalad()
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
                addBacon()
                addIngredient('bacon')
              }}
            >
              Add Bacon
            </button>
            <button
              onClick={() => {
                addMeat()
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
const mapStateToProps = (state) => ({
  ordered: state.addToOrder.ordered,
  burger: state.burger,
})

const mapDispatchToProps = {
  addCola,
  addFanta,
  addPepsi,
  addCheese,
  addKetchup,
  addMayo,
  addOnions,
  addPickles,
  addSalad,
  addBacon,
  addSpicy,
  addTomatoes,
  addMeat,
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
