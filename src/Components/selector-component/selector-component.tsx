import React from 'react';

class SelectorComponent extends React.Component {
  checkSummoner(): void {
    // Get input value
    // Pass it to the store
    console.log('sumName');
  }

  render() {
    return (
      <div>
        <label htmlFor="sumname">Summoner Name:</label>
        <input type="text" name="sumname" id="sumname" />

        <label htmlFor="sumregion">Server:</label>
        <select name="sumregion" id="sumregion">
          <option value="euw1">EUW</option>
        </select>

        <button onClick={this.checkSummoner}>Check</button>
      </div>
    );
  }
}

export default SelectorComponent;
