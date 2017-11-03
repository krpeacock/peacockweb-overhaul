import React from 'react';
import Icon from './Icon.js';

export default class Carousel extends React.Component {
  componentWillMount(){
    let activeItem, activeItemSrc;
    if (this.props.carouselItems){
      activeItem = this.props.carouselItems[0];
      activeItemSrc = activeItem['src'];
    }
    this.setState({
      carouselItems: this.props.carouselItems,
      activeIndex: 0,
      activeItem: activeItem,
      activeItemSrc: activeItemSrc,
      autoPlay: true
    })
  }
  
  step(direction){
    var carouselItems = this.state.carouselItems

    let activeIndex = this.state.activeIndex;
    if (direction === "forward")
      if( activeIndex < carouselItems.length - 1) 
        activeIndex ++
      else 
        activeIndex = 0;
    else if (direction === "back") 
      if (activeIndex > 0)  
        activeIndex --
      else
        activeIndex = carouselItems.length - 1
    
    this.setActiveIndex(activeIndex)
  }

  setActiveIndex(index){
    var carouselItems = this.state.carouselItems

    let activeItem = carouselItems[index]
    this.setState({
      activeIndex: index,
      activeItem,
    })
  }

  componentDidUpdate(){
    // Todo: add autoplay
    // let autoPlay = this.state.autoPlay;
    // var autoPlayInterval = setInterval(function(){
    //   if (autoPlay){
    //     this.step('forward');
    //   }
    //   else {
    //     clearInterval(autoPlayInterval);
    //   }
    // }.bind(this), 5000)
  }

  render(){
    let carouselTiles = this.state.carouselItems.map((item, index)=>{
      return (
        <li key={index}>
          <div 
            className="thumbnail" 
            style={{
              width: '75px', 
              height: "75px", 
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginRight: '10px'
            }}
            onClick={function(){this.setActiveIndex(index)}.bind(this)}
          />
        </li>
      )
    })
    let slides = this.state.carouselItems.map((item, index)=>{
      return (
        <div 
          className={"slide"}
          key={index}
          style={{
            visibility: `${index === this.state.activeIndex? 'visible':'hidden'}`,
            opacity: `${index === this.state.activeIndex? '1':'0'}`,
            gridColumn: '1/4',
            gridRow: '1/5',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'flex-end',
            transition: 'all 300ms ease-in-out'
          }}>
          <a 
            href={item["url"]}
            style={{
              marginTop:'auto'
            }}>  
            <img 
              className="carouselActiveImage"
              src={item['src']}
              style={{
                maxWidth: '80vw',
                maxHeight: '60vh',
                position: 'relative',
                zIndex: '-1',
                marginTop: 'auto'
              }}
              title={item['title']}
            />
          </a>
        </div>
      )
    })
    return <section className="carousel" aria-labelledby="carouselheading">
      <div className="slider">
        <div className="slider-buttons">
          <button 
            title="carousel back button"
            onClick={function(){this.step('back')}.bind(this)}
            className="back"
          >
            <Icon icon="play-left"/>
          </button>
          <button 
            title="carousel forward button"
            onClick={function(){this.step('forward')}.bind(this)}
            className="forward"
          >
            <Icon icon="play-right"/>
          </button>
        </div>
        {slides}
        <div className="carouselDescription">
          <p>{this.state.activeItem['description']}</p>
          <div className="descriptionBackground"></div>
        </div>
      </div>
      <ul className="thumbnail-list">
        {carouselTiles}
      </ul>
      <style jsx>{`
        .is-hidden {
          visibility: hidden
        }
        .is-active {
          visibility: visible
        }
        .slider {
          maxHeight: 60vh
          width: 80vw
          margin: 2em auto
          display: grid
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0
          grid-template-rows: repeat(4, 1fr);
          overflow: hidden
        }
        .slide a {
          overflow: hidden
        }
        .slider-buttons {
          position: relative;
          z-index: 1
          grid-column: 3/4
          grid-row: 1
          display: flex
          justify-content: flex-end
          height: 1.8em
        }
        .slider-buttons.back {
          float: left
        }
        .slider-buttons.forward {
          float: right
        }
        img.thumbnail {
          width: 20px
          margin-right: 10px
        }
        ul.thumbnail-list {
          list-style: none
          width: 80vw
          maxWidth: 700px
          margin: auto
          display: flex
          flex-direction: row
          padding-left: 0
        }
        .thumbnail-list > li {
          display: flex
          width: 30px
          margin-right: 10px
        }
        .carouselDescription {
          width: 80vw
          position: relative
          top: -4px
          overflow: hidden
          float: center
          clear: none
          grid-column: 1/3
          grid-row: 4
          display: grid
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
        }
        .descriptionBackground {
          width: 80vw
          background-color: black
          opacity: 0.5
          z-index: 1
          grid-column: 1/1
          grid-row: 2/2
        }
        .carouselDescription p {
          color: white
          opacity: 1
          position: relative
          z-index: 2
          text-align: left
          text-shadow: 0 0 5px #000
          grid-column: 1/1
          grid-row: 2/2
        }
      `}</style>
    </section>
  }
}