import React, { useState } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import GenerateButton from '../button/GenerateButton'
import Outputbox from '../console/Outputbox'
import Navbar from '../navbar/Navbar'
import Dropdown from '../dropdown-menu/Dropdown'
import InputFields from '../textinput/InputFields'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { grey } from '@mui/material/colors'
import './HTMLGenerator.css'

function roundToTwo (num) {
  return +(Math.round(num + 'e+2') + 'e-2')
}

function HTMLGenerator (props) {
  const [inputData, setInputData] = useState({
    selectedTile: 'Select type of Tile...',
    selectedDeal: 'Select type of Deal...',
    title: '',
    imageURL: '',
    picklistURL: '',
    clubperk: false,
    cluboffer: false,
    newin: '',
    backinstock: '',
    flashsale: '',
    white: false,
    x: '',
    y: '',
    excludes: ''
  })
  const [output, setOutput] = useState('')

  async function handleGenerate () {
    console.log(inputData.selectedDeal)

    let generatedHTML = ''
    console.log(inputData)
    switch (inputData.selectedTile) {
      case 'Small Tile':
        generatedHTML = tileGenerate(inputData)
        break
      case 'Large Tile':
        generatedHTML = tileGenerate(inputData)
        break
      case 'Banner':
        generatedHTML = tileBanner(inputData)
        alert('Banner is currently WIP')
        break
      default:
        alert('Please select a tile type...')
        break
    }

    // 'Item X% Off',
    // 'Item X up to Y% Off',
    // 'Buy X get Y% Off',
    // 'Buy X get Y Free / Half Price',
    // 'Buy X for Y',
    // 'Brand Name'
    console.log(generatedHTML)
    setOutput(generatedHTML)
  }

  function tileBanner (inputData) {
    
  }

  function tileGenerate (inputData) {
    const output =
      inputData.selectedDeal == 'Item X% Off'
        ? `
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
          <article class="c-tile__wrap u-light-mode"><a href="${
            inputData.picklistURL
          }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
          </a>
          ${
            inputData.selectedTile == 'Small Tile'
              ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
              : inputData.selectedTile == 'Large Tile'
              ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
              : ``
          }
                  <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
                    inputData.imageURL.length > 53
                      ? inputData.imageURL
                      : 'https://www.torpedo7.co.nz' + inputData.imageURL
                  }&quot;);">
                  <br></div>
                  <div class="c-tile-coupon3__content-wrap">
                      <div class="c-tile-coupon3__content ">
                          <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                          <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                            inputData.white ? 'white' : 'black'
                          } !important;">${inputData.title}</h5>
                          <div class="c-tile-coupon3__offer">
                              <div class="c-lockup">
                                  <div class="u-flex-column">
                                      <div class="u-flex">
                                          <div contenteditable="false" class="c-lockup__number t-bold-weight" style="color:${
                                            inputData.white ? 'white' : 'black'
                                          } !important">
                                            ${inputData.x}</div>
                                          <div class="c-lockup__price-suffix">
                                              <div class="c-lockup__number-percentage t-bold-weight" style="color:${
                                                inputData.white
                                                  ? 'white'
                                                  : 'black'
                                              } !important">%</div>
                                              <div class="c-lockup__number-off t-bold-weight" style="color:${
                                                inputData.white
                                                  ? 'white'
                                                  : 'black'
                                              } !important">Off</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          ${
                            inputData.excludes
                              ? `<div class="c-lockup">
                                      <div class="c-lockup__price-title mt-1">
                                        <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;"><small contenteditable="false" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">${
                                  inputData.excludes
                                }</small></div>
                                      </div>
                                    </div>`
                              : ''
                          }
                          </div>
                          <!---->
                      </div>
                  </div>
                  <!---->
                  ${
                    inputData.clubperk
                      ? `
                  <div class="c-tile-coupon3__footer">
                    <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                  </div>`
                      : ''
                  }
                  ${
                    inputData.cluboffer
                      ? `
                  <div class="c-tile-coupon3__footer">
                    <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                  </div>`
                      : ''
                  }
                  ${
                    inputData.newin
                      ? `
                  <div class="c-tile-coupon3__footer">
                  <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                      : ''
                  }
                  ${
                    inputData.backinstock
                      ? `
                  <div class="c-tile-coupon3__footer">
                  <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                  </div>`
                      : ''
                  }
          </article>
      </div>
    `
        : inputData.selectedDeal == 'Item upto X% Off'
        ? ` 
    
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
    <article class="c-tile__wrap u-light-mode"><a href="${
      inputData.picklistURL
    }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
    </a>
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
        : ``
    }
            <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
              inputData.imageURL.length > 53
                ? inputData.imageURL
                : 'https://www.torpedo7.co.nz' + inputData.imageURL
            }&quot;);"><br></div>
            <div class="c-tile-coupon3__content-wrap">
                <div class="c-tile-coupon3__content ">
                    <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                    <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                      inputData.white ? 'white' : 'black'
                    } !important;">${inputData.title}</h5>
                    <div class="c-tile-coupon3__offer">
                        <div class="c-lockup">
                            <div class="c-lockup__price-title">
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                                <div class="c-lockup__label t-bold-weight" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">UP TO</div>
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                            </div>
                            <div class="u-flex-column">
                                <div class="u-flex">
                                    <div contenteditable="false" class="c-lockup__number t-bold-weight" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${inputData.x}</div>
                                    <div class="c-lockup__price-suffix">
                                        <div class="c-lockup__number-percentage t-bold-weight" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">%</div>
                                        <div class="c-lockup__number-off t-bold-weight" style="color: ${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">Off</div>
                                          </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              ${
                                inputData.excludes
                                  ? `<div class="c-lockup">
                                          <div class="c-lockup__price-title mt-1">
                                            <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                              inputData.white
                                                ? 'white'
                                                : 'black'
                                            } !important;"><small contenteditable="false" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${
                                      inputData.excludes
                                    }</small></div>
                                          </div>
                                        </div>`
                                  : ''
                              }
                              </div>
                              <!---->
                          </div>
                      <!---->
                      ${
                        inputData.clubperk
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.cluboffer
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.newin
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                          : ''
                      }
                      ${
                        inputData.backinstock
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                      </div>`
                          : ''
                      }
                  </div>
              </article>
          </div>
    `
        : inputData.selectedDeal == 'Buy X get Y% Off'
        ? ` 
    
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
    <article class="c-tile__wrap u-light-mode"><a href="${
      inputData.picklistURL
    }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
    </a>
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
        : ``
    }
            <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
              inputData.imageURL.length > 53
                ? inputData.imageURL
                : 'https://www.torpedo7.co.nz' + inputData.imageURL
            }&quot;);"><br></div>
            <div class="c-tile-coupon3__content-wrap">
                <div class="c-tile-coupon3__content ">
                    <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                    <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                      inputData.white ? 'white' : 'black'
                    } !important;">${inputData.title}</h5>
                    <div class="c-tile-coupon3__offer">
                        <div class="c-lockup">
                            <div class="c-lockup__price-title">
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                                <div class="c-lockup__label t-bold-weight" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">BUY ${inputData.x} GET</div>
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                            </div>
                            <div class="u-flex-column">
                                <div class="u-flex">
                                    <div contenteditable="false" class="c-lockup__number t-bold-weight" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${inputData.y}</div>
                                    <div class="c-lockup__price-suffix">
                                        <div class="c-lockup__number-percentage t-bold-weight" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">%</div>
                                        <div class="c-lockup__number-off t-bold-weight" style="color: ${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">Off</div>
                                          </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              ${
                                inputData.excludes
                                  ? `<div class="c-lockup">
                                          <div class="c-lockup__price-title mt-1">
                                            <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                              inputData.white
                                                ? 'white'
                                                : 'black'
                                            } !important;"><small contenteditable="false" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${
                                      inputData.excludes
                                    }</small></div>
                                          </div>
                                        </div>`
                                  : ''
                              }
                              </div>
                              <!---->
                          </div>
                    
                      <!---->
                      ${
                        inputData.clubperk
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.cluboffer
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.newin
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                          : ''
                      }
                      ${
                        inputData.backinstock
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                      </div>`
                          : ''
                      }
                  </div>
              </article>
          </div>
    `
        : inputData.selectedDeal == 'Buy X get Y Half Price'
        ? ` 
    
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
    <article class="c-tile__wrap u-light-mode"><a href="${
      inputData.picklistURL
    }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
    </a>
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
        : ``
    }
            <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
              inputData.imageURL.length > 53
                ? inputData.imageURL
                : 'https://www.torpedo7.co.nz' + inputData.imageURL
            }&quot;);"><br></div>
            <div class="c-tile-coupon3__content-wrap">
                <div class="c-tile-coupon3__content ">
                    <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                    <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                      inputData.white ? 'white' : 'black'
                    } !important;">${inputData.title}</h5>
                    <div class="c-tile-coupon3__offer">
                        <div class="c-lockup">
                            <div class="c-lockup__price-title">
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                                <div class="c-lockup__label t-bold-weight" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">BUY ${inputData.x} GET ${
            inputData.y
          }</div>
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                            </div>
                            <div class="u-flex-column">
                                <div class="u-flex">
                                
                                    <div class="c-lockup__price-suffix">
                                        <div class="c-lockup__number-percentage t-bold-weight" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">HALF PRICE</div>
                                     
                                          </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              ${
                                inputData.excludes
                                  ? `<div class="c-lockup">
                                          <div class="c-lockup__price-title mt-1">
                                            <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                              inputData.white
                                                ? 'white'
                                                : 'black'
                                            } !important;"><small contenteditable="false" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${
                                      inputData.excludes
                                    }</small></div>
                                          </div>
                                        </div>`
                                  : ''
                              }
                              </div>
                              <!---->
                          
                      </div>
                      <!---->
                      ${
                        inputData.clubperk
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.cluboffer
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.newin
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                          : ''
                      }
                      ${
                        inputData.backinstock
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                      </div>`
                          : ''
                      }
                  </div>
              </article>
          </div>
    `
        : inputData.selectedDeal == 'Buy X get Y Free'
        ? ` 
    
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
    <article class="c-tile__wrap u-light-mode"><a href="${
      inputData.picklistURL
    }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
    </a>
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
        : ``
    }
            <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
              inputData.imageURL.length > 53
                ? inputData.imageURL
                : 'https://www.torpedo7.co.nz' + inputData.imageURL
            }&quot;);"><br></div>
            <div class="c-tile-coupon3__content-wrap">
                <div class="c-tile-coupon3__content ">
                    <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                    <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                      inputData.white ? 'white' : 'black'
                    } !important;">${inputData.title}</h5>
                    <div class="c-tile-coupon3__offer">
                        <div class="c-lockup">
                            <div class="c-lockup__price-title">
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                                <div class="c-lockup__label t-bold-weight" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">BUY ${inputData.x} GET ${
            inputData.y
          }</div>
                                <div class="c-lockup__seperator t-line" style="background:${
                                  inputData.white ? 'white' : 'black'
                                } !important;"></div>
                            </div>
                            <div class="u-flex-column">
                                <div class="u-flex">
                                  
                                    <div class="c-lockup__price-suffix">
                                        <div class="c-lockup__number-percentage t-bold-weight" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;">FREE</div>

                                          </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              ${
                                inputData.excludes
                                  ? `<div class="c-lockup">
                                          <div class="c-lockup__price-title mt-1">
                                            <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                              inputData.white
                                                ? 'white'
                                                : 'black'
                                            } !important;"><small contenteditable="false" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${
                                      inputData.excludes
                                    }</small></div>
                                          </div>
                                        </div>`
                                  : ''
                              }
                              </div>
                              <!---->
                          </div>
                      </div>
                      <!---->
                      ${
                        inputData.clubperk
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.cluboffer
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.newin
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                          : ''
                      }
                      ${
                        inputData.backinstock
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                      </div>`
                          : ''
                      }
                  </div>
              </article>
          </div>
    `
        : inputData.selectedDeal == 'Was X, Save $Y'
        ? ` 
    
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
        : ``
    }  
    <article class="c-tile__wrap u-light-mode"><a href="${
      inputData.picklistURL
    }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
    </a> 
    ${
      inputData.selectedTile == 'Small Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
        : inputData.selectedTile == 'Large Tile'
        ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
        : ``
    }
            <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
              inputData.imageURL.length > 53
                ? inputData.imageURL
                : 'https://www.torpedo7.co.nz' + inputData.imageURL
            }&quot;);"><br></div>
            <div class="c-tile-coupon3__content-wrap">
                <div class="c-tile-coupon3__content ">
                    <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                    <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                      inputData.white ? 'white' : 'black'
                    } !important;">${inputData.title}</h5>
                      <div class="c-tile-coupon3__offer">
                      <div class="c-lockup">
                          <div class="c-lockup__price-title">
                            <div class="c-card-promo-product3__price-old">$${
                              inputData.x
                            }</div>
                            <div class="c-card-promo-product3__offer" style="color:${
                              inputData.white ? 'white' : 'black'
                            } !important;">SAVE $${inputData.y}</div>
                          </div>
                          <div class="u-flex-column">
                              <div class="u-flex">
                              <div class="c-card-promo-product3__price-dollars" style="color:${
                                inputData.white ? 'white' : 'black'
                              } !important;">$</div>
                              <div class="c-card-promo-product3__price" style="color:${
                                inputData.white ? 'white' : 'black'
                              } !important;">${roundToTwo(
            inputData.x - inputData.y
          )}
                                </div>
                              
              
                              </div>
                          </div>
                      </div>
                  </div>
              
                              ${
                                inputData.excludes
                                  ? `<div class="c-lockup">
                                          <div class="c-lockup__price-title mt-1">
                                            <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                              inputData.white
                                                ? 'white'
                                                : 'black'
                                            } !important;"><small contenteditable="false" style="color:${
                                      inputData.white ? 'white' : 'black'
                                    } !important;">${
                                      inputData.excludes
                                    }</small></div>
                                          </div>
                                        </div>`
                                  : ''
                              }
                              </div>
                              <!---->
                          </div>
                      </div>
                      <!---->
                      ${
                        inputData.clubperk
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.cluboffer
                          ? `
                      <div class="c-tile-coupon3__footer">
                        <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                      </div>`
                          : ''
                      }
                      ${
                        inputData.newin
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                          : ''
                      }
                      ${
                        inputData.backinstock
                          ? `
                      <div class="c-tile-coupon3__footer">
                      <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                      </div>`
                          : ''
                      }
                  
              </article>
          </div>
    `
        : inputData.selectedDeal == 'Brand Name'
        ? ` 

${
  inputData.selectedTile == 'Small Tile'
    ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--three-l">`
    : inputData.selectedTile == 'Large Tile'
    ? `<div class="u-columns__column u-columns__column--six-s todo-item lmdd-block u-columns__column--six-l">`
    : ``
}  
<article class="c-tile__wrap u-light-mode"><a href="${
            inputData.picklistURL
          }" aria-hidden="true" data-twg-id="${
            inputData.title
          }" class="c-tile__link promo_box">${inputData.title}
</a> 
${
  inputData.selectedTile == 'Small Tile'
    ? `<div class="c-tile-top u-bg-white c-tile u-aspect-one-by-one u-aspect-eight-by-nine-m">`
    : inputData.selectedTile == 'Large Tile'
    ? `<div class="c-tile-top u-bg-white c-tile u-aspect-nine-by-eight u-aspect-eight-by-nine-m u-aspect-sixteen-by-nine-l">`
    : ``
}
        <div class="c-tile-coupon3__image" style="background-image: url(&quot;${
          inputData.imageURL.length > 53
            ? inputData.imageURL
            : 'https://www.torpedo7.co.nz' + inputData.imageURL
        }&quot;);"><br></div>
        <div class="c-tile-coupon3__content-wrap">
            <div class="c-tile-coupon3__content ">
                <h3 class="c-tile-coupon3__heading t-heading u-font"><small contenteditable="false"></small></h3>
                <h5 contenteditable="false" class="c-tile-coupon3__heading t-heading" style="color:${
                  inputData.white ? 'white' : 'black'
                } !important;">${inputData.title}</h5>
                  <div class="c-tile-coupon3__offer">
                  <div class="c-lockup">
                      <div class="c-lockup__price-title">
                        <div class="c-card-promo-product3__price-old"></div>
                        <div class="c-card-promo-product3__offer" style="color:${
                          inputData.white ? 'white' : 'black'
                        } !important;"></div>
                      </div>
                      <div class="u-flex-column">
                          <div class="u-flex">
                          <div class="c-card-promo-product3__price-dollars" style="color:${
                            inputData.white ? 'white' : 'black'
                          } !important;"></div>
                          <div class="c-card-promo-product3__price" style="color:${
                            inputData.white ? 'white' : 'black'
                          } !important;">
                            </div>
                          
          
                          </div>
                      </div>
                  </div>
              </div>
          
                          ${
                            inputData.excludes
                              ? `<div class="c-lockup">
                                      <div class="c-lockup__price-title mt-1">
                                        <div class="u-flex-justify-center c-lockup__label u-uppercase" style="color:${
                                          inputData.white ? 'white' : 'black'
                                        } !important;"><small contenteditable="false" style="color:${
                                  inputData.white ? 'white' : 'black'
                                } !important;">${
                                  inputData.excludes
                                }</small></div>
                                      </div>
                                    </div>`
                              : ''
                          }
                          </div>
                          <!---->
                      </div>
                  </div>
                  <!---->
                  ${
                    inputData.clubperk
                      ? `
                  <div class="c-tile-coupon3__footer">
                    <div class="c-pill c-club-tag c-tile-coupon3__pill">CLUB PERK</div>
                  </div>`
                      : ''
                  }
                  ${
                    inputData.cluboffer
                      ? `
                  <div class="c-tile-coupon3__footer">
                    <div class="c-pill c-club-tag c-tile-coupon3__pill hotclubdeal">HOT CLUB DEAL</div>
                  </div>`
                      : ''
                  }
                  ${
                    inputData.newin
                      ? `
                  <div class="c-tile-coupon3__footer">
                  <div class="c-pill c-pill--primary c-tile-coupon3__pill">New In</div></div>`
                      : ''
                  }
                  ${
                    inputData.backinstock
                      ? `
                  <div class="c-tile-coupon3__footer">
                  <div class="c-pill c-pill--primary c-tile-coupon3__pill">All Sizes Back In Stock</div>
                  </div>`
                      : ''
                  }
              
          </article>
      </div>
`
        : alert('Please select a deal type...')

    console.log(output)
    return output
  }

  return (
    <center style={{ padding: '1rem' }}>
      <Dropdown
        options={['Large Tile', 'Small Tile', 'Banner']}
        selected={inputData.selectedTile}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedTile: selectedItem })
        }}
      />
      <InputFields
        placeholder='Input Tile Title Here...'
        value={inputData.title}
        labelText='Tile/Product Title'
        onKeyTyped={userInput => {
          setInputData({ ...inputData, title: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Tile Image URL Here...'
        value={inputData.imageURL}
        labelText='Image URL'
        onKeyTyped={userInput => {
          setInputData({ ...inputData, imageURL: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Tile Picklist URL Here...'
        value={inputData.picklistURL}
        labelText='Picklist URL'
        onKeyTyped={userInput => {
          setInputData({ ...inputData, picklistURL: userInput.target.value })
        }}
      />
      <Dropdown
        style={{ zIndex: '10' }}
        options={[
          'Item X% Off',
          'Item upto X% Off',
          'Buy X get Y% Off',
          'Buy X get Y Half Price',
          'Buy X get Y Free',
          'Was X, Save $Y',
          'Brand Name'
        ]}
        selected={inputData.selectedDeal}
        onSelected={selectedItem => {
          setInputData({ ...inputData, selectedDeal: selectedItem })
        }}
      />
      <InputFields
        placeholder='Input X Value Here...'
        value={inputData.x}
        labelText='X Value'
        onKeyTyped={userInput => {
          setInputData({ ...inputData, x: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='Input Y Value Here...'
        labelText='Y Value'
        value={inputData.y}
        onKeyTyped={userInput => {
          setInputData({ ...inputData, y: userInput.target.value })
        }}
      />
      <InputFields
        placeholder='*Excludes...'
        value={inputData.excludes}
        labelText='Exclusions'
        onKeyTyped={userInput => {
          setInputData({ ...inputData, excludes: userInput.target.value })
        }}
      />

      <FormControlLabel
        labelPlacement='bottom'
        className='checkbox'
        control={<Checkbox />}
        label='Club Perk'
        checked={inputData.clubperk}
        sx={{
          color: grey[900],
          '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
        }}
        onChange={event => {
          setInputData({ ...inputData, clubperk: event.target.checked })
        }}
      />

      <FormControlLabel
        labelPlacement='bottom'
        className='checkbox'
        control={<Checkbox />}
        label='Club Deal'
        checked={inputData.cluboffer}
        sx={{
          color: grey[900],
          '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
        }}
        onChange={event => {
          setInputData({ ...inputData, cluboffer: event.target.checked })
        }}
      />

      <FormControlLabel
        labelPlacement='bottom'
        className='checkbox'
        control={<Checkbox />}
        label='New in'
        checked={inputData.newin}
        sx={{
          color: grey[900],
          '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
        }}
        onChange={event => {
          setInputData({ ...inputData, newin: event.target.checked })
        }}
      />
      <FormControlLabel
        labelPlacement='bottom'
        className='checkbox'
        control={<Checkbox />}
        label='Back in Stock'
        checked={inputData.backinstock}
        sx={{
          color: grey[900],
          '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
        }}
        onChange={event => {
          setInputData({ ...inputData, backinstock: event.target.checked })
        }}
      />
      <FormControlLabel
        labelPlacement='bottom'
        className='checkbox'
        control={<Checkbox />}
        label='White'
        checked={inputData.white}
        sx={{
          color: grey[900],
          '& .MuiSvgIcon-root': { fontSize: 30, color: grey[900] }
        }}
        onChange={event => {
          setInputData({ ...inputData, white: event.target.checked })
        }}
      />
      <hr></hr>
      <GenerateButton onButtonClick={handleGenerate} />
      <button
        className='copyButton'
        onClick={() => {
          navigator.clipboard.writeText(output.replace(/^\s+|\s+$/gm, ''))
          alert('Output Copied to Clipboard')
        }}
      >
        Copy Output
      </button>
      <Outputbox output={output} />
    </center>
  )
}

export default HTMLGenerator
