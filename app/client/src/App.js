import React, { Component } from 'react';
import convert from 'convert-units';
import ImagePanel from './components/ImagePanel';
import Sidebar from './components/Sidebar';
import redocircle from './icons/RedoCircle.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: Date.now(),
      imageLeft: '',
      imageLeftName: '',
      imageRight: '',
      imageRightName: '',
      focalLength: '',
      sensorWidth: '',
      minDisparity: 32,
      numDisparity: 96,
      referencePt1: '',
      referencePt2: '',
      referenceLength: '',
      measurePt1: '',
      measurePt2: '',
      estimatedDistance: '',
      measureUnit: 'mm',
      referenceUnit: 'mm',
      canvasMode: 'view',
      image_width: 640,
      image_height: 600,
      validPoints: '',
      currentStep: 1,
      errorLog: '',
    };
  }

  restart = () => {
    this.setState({
      imageLeft: '',
      imageLeftName: '',
      imageRight: '',
      imageRightName: '',
      focalLength: '',
      sensorWidth: '',
      minDisparity: 32,
      numDisparity: 96,
      referencePt1: '',
      referencePt2: '',
      referenceLength: '',
      measurePt1: '',
      measurePt2: '',
      estimatedDistance: '',
      measureUnit: 'mm',
      referenceUnit: 'mm',
      canvasMode: 'view',
      image_width: 640,
      image_height: 600,
      validPoints: '',
      currentStep: 1,
      errorLog: '',
    })
  }

  componentDidMount() {
    fetch('http://localhost:9000/clear_images/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
  }

  handleStateUpdate = newState => {
    this.setState(newState);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleOnclickBack = () => {
    const back = this.state.currentStep - 1
    const step = Math.max(1, back)
    let mode = 'view'

    if(step === 4)
      mode = 'reference';
    if(step === 5)
      mode = 'measure';

    this.setState({
      currentStep: step,
      canvasMode: mode
    });
  }

  handleOnclickNext = () => {
    const next = this.state.currentStep + 1
    const step = Math.min(6, next)
    let mode = 'view'

    if(step === 4)
      mode = 'reference';
    if(step === 5)
      mode = 'measure';

    this.setState({
      currentStep: step,
      canvasMode: mode
    });
  }

  getMeasurement = () => {
    let length = this.state.estimatedDistance;
    if (length === '') return length;

    let measureUnit = this.state.measureUnit;
    let referenceUnit = this.state.referenceUnit;

    length = convert(length).from(referenceUnit).to(measureUnit);
    length = Math.round(length * 100) / 100

    return length;
  }

  render() {
    const estimatedDistance = this.getMeasurement(),
          files = {
            session: this.state.session,
            imageLeft: this.state.imageLeft,
            imageRight: this.state.imageRight,
            imageLeftName: this.state.imageLeftName,
            imageRightName: this.state.imageRightName,
          },
          userPoints = {
            referencePt1: this.state.referencePt1,
            referencePt2: this.state.referencePt2,
            measurePt1: this.state.measurePt1,
            measurePt2: this.state.measurePt2,
          },
          params = {
            imageLeftName: this.state.imageLeftName,
            imageRightName: this.state.imageRightName,
            focalLength: this.state.focalLength,
            sensorWidth: this.state.sensorWidth,
            minDisparity: this.state.minDisparity,
            numDisparity: this.state.numDisparity,
            referencePt1: this.state.referencePt1,
            referencePt2: this.state.referencePt2,
            referenceLength: this.state.referenceLength,
            measurePt1: this.state.measurePt1,
            measurePt2: this.state.measurePt2,
          },
          calculatedParams = {
            estimatedDistance: this.state.estimatedDistance,
            image_width: this.state.image_width,
            image_height: this.state.image_height,
            validPoints: this.state.validPoints,
          };

    const unitchanger = 
          <div className="unit-changer d-flex justify-content-start align-items-center mb-3">
            <h5 className="text-nowrap mr-4 mb-0">Unit of Measure</h5>
            <div className="input-group">
              <select className="custom-select" name="measureUnit" value={this.state.measureUnit} onChange={this.handleChange}>
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="m">m</option>
                <option value="in">inches</option>
                <option value="ft">feet</option>
              </select>
            </div>
          </div>;

    return (
      <div className="App">
        <header>
          <nav className="navbar fixed-top">
            <div className="navbar-container d-flex justify-content-between align-items-center">
              <span className="navbar-brand clickable mr-auto" onClick={this.restart}>
                <img src="logo.png" alt="Stereoscopic Logo"/>
              </span>
              
                {this.state.currentStep > 1 &&
                  <span className="clickable d-flex justify-content-between align-items-center" onClick={this.restart}>
                    <img src={redocircle} className="redo-circle-svg" alt="redo" /> Start Over
                  </span>
                }
            </div>
          </nav>
        </header>

        <div className="Main d-flex justify-content-between">

          <ImagePanel
            files={files}
            params={params}
            estimatedDistance={estimatedDistance}
            measureUnit={this.state.measureUnit}
            referenceLength={this.state.referenceLength}
            referenceUnit={this.state.referenceUnit}
            focalLength={this.state.focalLength}
            sensorWidth={this.state.sensorWidth}
            resizeWidth={this.state.image_width}
            resizeHeight={this.state.image_height}
            canvasMode={this.state.canvasMode}
            validPoints={this.state.validPoints}
            userPoints={userPoints}
            currentStep={this.state.currentStep}
            updateState={this.handleStateUpdate}
            handleOnclickNext={this.handleOnclickNext}
            handleOnclickBack={this.handleOnclickBack}
            unitchanger={unitchanger}
          />
          
          <Sidebar 
            params={params}
            calculatedParams={calculatedParams}
            canvasMode={this.state.canvasMode}
            currentStep={this.state.currentStep}
            updateState={this.handleStateUpdate}
            referenceUnit={this.state.referenceUnit}
            referenceLength={this.state.referenceLength}
            measureUnit={this.state.measureUnit}
            estimatedDistance={estimatedDistance}
            handleOnclickNext={this.handleOnclickNext}
            handleOnclickBack={this.handleOnclickBack}
          />
        </div>
      </div>
    );
  }
}

export default App;
