import React from 'react'
import bulbasaur from '../Assets/bulbasaur 1.png'
import arrow from '../Assets/CaretRight.png'
import change from '../Assets/Vector (1) (1).png'
import heart from '../Assets/Heart.png'
import minus from '../Assets/MinusCircle.png'



const PokeSearch = () => {
  return (
    <div>
      {/* Navbar */}
      <div className='lg:flex mt-10 ml-0 lg:ml-10 relative lg:static max-lg:text-center'>
        <p className="text-5xl md:text-7xl lg:text-8xl my-auto max-[426px]:text-center text-nowrap">POK&#xc9;-SEARCH</p>
        <input className="w-64 md:w-[500px] h-10 rounded-xl my-auto lg:ml-10 2xl:ml-[475px] px-5" type="search" id="searchBar" placeholder="SEARCH POKEMON NAME OR NO."></input>
        <button id="favList" className="w-12 md:w-24 lg:pl-20 xl:pl-5 absolute lg:static top-10 md:top-10 lg:top-0 right-5 md:right-[-30px] lg:right-0" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example" data-drawer-backdrop="false">
                <img src={heart} alt="Heart Favorite Button"/>
            </button>

            <div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-full p-4 overflow-y-auto transition-transform translate-x-full bg-[#D68A9C] w-80" tabIndex={-1} aria-labelledby="drawer-right-label">
                <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-black bg-transparent rounded-lg text-sm w-10 h-10 absolute max-lg:left-3 top-2.5 inline-flex items-center justify-center dark:hover:bg-rose-300">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close menu</span>
                 </button>
                <h5 id="drawer-right-label" className="flex justify-center items-center mb-4 text-3xl font-semibold text-black">FAVORITES</h5>
        
               <div id="favCol" className="columns-1 space-y-3 overflow-y-auto">

               </div>
            </div>
      </div>

      {/* Main Display */}
      <div className="columns-1 lg:columns-2 mt-10">
        <div className="text-center space-y-3 text-3xl">
            <p id="pokeName">BULBASAUR NO.1</p>
            <div className="flex justify-center space-x-3">
                <p id="skin">SKIN</p>
                <button className="w-5" id="changeSkinBtn">
                    <img src={change} alt="Change Button"/>
                </button>
             </div>
            <img className="mx-auto max-md:w-64 max-md:h-64 w-80 h-80" id="pokemonDisplay" src={bulbasaur} alt="Pokemon Image"/>
        </div>
        <div>
            <div className="mx-auto max-lg:text-center lg:flex max-md:space-y-4">
            <button className="bg-[#ACC3EF] w-2/3 text-nowrap md:w-1/3 lg:w-5/12 py-4 md:mr-2 rounded-xl" id="favPokemon">
                FAVORITE CURRENT POKEMON
            </button>
            <button className="bg-[#ACC3EF] w-2/3 text-nowrap md:w-1/3 lg:w-5/12 py-4 md:ml-2 rounded-xl" id="pickRandom">
                PICK RANDOM POKEMON
            </button>
        </div>  
            <div className="bg-[#f5f5f5] border-black border-[3px] rounded-xl p-6 max-lg:mx-auto w-11/12 lg:w-[610px] 2xl:w-[85%] text-2xl md:text-4xl mt-5 h-80 md:h-96">
                <p className="text-3xl md:text-4xl">BASE STATS:</p>
                <div id="stats" className="columns-2 mt-12 ml-3">
                    <div>
                        <p id="hp">HP- 45</p>
                        <br/>
                        <p id="atk">ATK- 49</p>
                        <br/>
                        <p id="def">DEF- 49</p>
                    </div>
                    <div>
                        <p id="spAtk">SP. ATK- 65</p>
                         <br/>
                        <p id="spDef">SP. DEF- 65</p>
                        <br/>
                        <p id="spd">SPD- 45</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="columns-1 lg:columns-2 space-y-8 lg:space-y-0">
        <div className="bg-[#f5f5f5] border-black border-[3px] rounded-xl p-6 max-lg:mx-auto text-2xl md:text-3xl h-full lg:h-80 w-11/12 lg:w-3/4 xl:w-[620px] 2xl:w-[88%] lg:ml-20 space-y-6 py-12" id="info">
            <p className="text-nowrap" id="type">TYPE: </p>
            <p id="habitat">LOCATION:</p>
            <p className="text-nowrap" id="weight">WEIGHT: </p>
            <p className="text-nowrap" id="height">HEIGHT: </p>
        </div>
    <div className="flex space-x-5 max-lg:justify-center lg:space-x-4 space-y-0 ">
        <div className="bg-[#f5f5f5] border-black border-[3px] rounded-xl p-6 text-xl md:text-3xl h-72 md:h-80 w-[45%] lg:w-5/12 overflow-y-scroll space-y-5" id="moves">
            <p id="movesP">MOVES:</p>
        </div>
        <div className="bg-[#f5f5f5] border-black border-[3px] rounded-xl p-6 text-xl md:text-3xl h-72 md:h-80 w-[45%] lg:w-5/12 space-y-4 overflow-y-auto" id="abilities">
            <p>ABILITIES:</p>
            <p className="ml-2" id="ability1">OverGrow</p>
            <p className="ml-2 text-nowrap" id="ability2">Chlorophyll</p>
            <p className="text-nowrap pt-5 ml-2" id="hiddenAbility"></p>
        </div>
    </div>
    </div>

    <div className="columns-1">
        <div className="bg-[#f5f5f5] border-black border-[3px] max-lg:mx-auto rounded-xl p-6 text-xl mt-3 md:h-[750px] lg:h-80 w-11/12 lg:w-[88%] lg:ml-20 text-center mb-10" id="evolutions">
            <p className="text-3xl mb-16 lg:mb-5">EVOLUTIONS</p>
            <span id="evolutionChart" className="lg:flex lg:space-x-20 justify-center flex-wrap lg:mt-0"/>
                
        </div>
    </div>





    </div>
  )
}

export default PokeSearch