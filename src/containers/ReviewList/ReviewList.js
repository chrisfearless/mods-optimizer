import React from 'react';
import ModDetail from "../../components/ModDetail/ModDetail";
import CharacterAvatar from "../../components/CharacterAvatar/CharacterAvatar";

import './ReviewList.css';
import Arrow from "../../components/Arrow/Arrow";

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {'sortBy': 'assignTo'};

    if ('function' === typeof props.saveState) {
      this.saveState = props.saveState;
    } else {
      this.saveState = function() {};
    }
  }

  render() {
    let movingMods = this.props.mods.filter(mod => mod.assignTo && mod.currentCharacter !== mod.assignTo);

    if ('currentCharacter' === this.state.sortBy) {
      movingMods.sort((left, right) => {
        let leftCharName = left.currentCharacter ? left.currentCharacter.name : '';
        let rightCharName = right.currentCharacter ? right.currentCharacter.name : '';

        if (leftCharName < rightCharName) {
          return -1;
        } else if (leftCharName > rightCharName) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if ('assignTo' === this.state.sortBy) {
      movingMods.sort((left, right) => {
        let leftCharName = left.assignTo ? left.assignTo.name : '';
        let rightCharName = right.assignTo ? right.assignTo.name : '';

        if (leftCharName < rightCharName) {
          return -1;
        } else if (leftCharName > rightCharName) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    const modRows = movingMods.map(mod =>
      <div className={'mod-row'} key={mod.id} >
        <ModDetail key={mod.id} mod={mod}/>
        <Arrow />
        <CharacterAvatar name={mod.assignTo.name}/>
        <div className={'actions'}>
          <button onClick={this.removeMod.bind(this, mod)}>Remove Mod</button>
          <button onClick={this.reassignMod.bind(this, mod)}>Reassign Mod</button>
        </div>
      </div>
    );

    if (0 === movingMods.length) {
      return (
        <div className={'review-list'}>
          <h2>You don't have any mods left to move! Great job!</h2>
          <h3>Don't forget to assign mods to all your pilots!</h3>
        </div>
      )
    } else {
      return (
        <div className={'review-list'}>
          <h2>Reassigning {movingMods.length} mods</h2>
          <div className={'sort-options'}>
            Sort By:
            <button onClick={this.sortByCurrent.bind(this)}>Currently Equipped</button>
            <button onClick={this.sortByAssigned.bind(this)}>Assigned Character</button>
          </div>
          <div className={'mods-list'}>
            {modRows}
          </div>
        </div>
      );
    }
  }

  removeMod(mod) {
    mod.currentCharacter = null;
    this.setState({});
    this.saveState();
  }

  reassignMod(mod) {
    this.props.mods
      .filter(m => m.currentCharacter === mod.assignTo && m.slot === mod.slot)
      .forEach(m => m.currentCharacter = null);
    mod.currentCharacter = mod.assignTo;
    this.setState({});
    this.saveState();
  }

  sortByCurrent() {
    this.setState({'sortBy': 'currentCharacter'});
  }

  sortByAssigned() {
    this.setState({'sortBy': 'assignTo'});
  }
}

export default ReviewList;