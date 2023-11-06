import React, { useRef } from 'react'

function ref() {
  const down = useRef()
  const up = useRef()
  const moveToDown = () => {
    down.current.scrollIntoView(
      {
        behavior : "smooth",
        block : "center"
      }
    )
  }
  const moveToUp = ()=>{
    up.current.scrollIntoView(
      {
        behavior : "smooth",
        block : "center"
      }
    )
  }
  return (
    <>
      <div class="container mt-5">
        <h1 class="text-center">List View</h1>
        <button onClick={moveToDown} ref={up}>move down</button>
        
        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 1" class="img-fluid item-image" />
                <h2>Item 1</h2>
                <p>Description for Item 1.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 2</h2>
                <p>Description for Item 2.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 3</h2>
                <p>Description for Item 3.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 4</h2>
                <p>Description for Item 4.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 5</h2>
                <p>Description for Item 5.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 6 </h2>
                <p>Description for Item 6.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 7</h2>
                <p>Description for Item 7.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 8</h2>
                <p>Description for Item 8.</p>
            </div>
        </div>

        <div class="row" >
            <div class="col-md-12 list-item">
                <img src="https://via.placeholder.com/100" alt="Item 2" class="img-fluid item-image" />
                <h2>Item 9</h2>
                <p>Description for Item 9.</p>
            </div>
        </div>
        <button ref={down} onClick={moveToUp}>move up</button>

    </div>
    </>
  )
}

export default ref
