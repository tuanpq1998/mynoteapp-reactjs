import React, { Component } from "react";
import {connect} from "react-redux";
import { deleteNote } from "../store/actions/noteDataActions";
import * as actionTypes from "../store/actions/actionTypes"

class NoteItem extends Component {

  handleOpenEdit = (item, id) => {
    this.props.enterEditMode({...item, id});
  }

  renderNewFlag = (unixTime) => {
    const nowUnixTime = Math.round((new Date()).getTime() / 1000), ONE_DAY = 86400;
    if (nowUnixTime - unixTime < ONE_DAY/2)
      return ( <span className="badge badge-danger badge-pill">new</span>);
  }

  renderDateTime = (unixTime) => {
    const date = new Date(unixTime*1000);
    return (
      <abbr title={date}>{date.toLocaleDateString()}</abbr>
    );
  }

  renderEditBtn = (isThisItemEditing = false) => {
    const {data, idItem, idEditing} = this.props;
    if (idEditing !== null)
      return (
        <button type="button" disabled className="btn btn-sm btn-outline-secondary">
          {isThisItemEditing ? "Editing ..." : "Edit"}
        </button>
      )
    return (
      <button type="button" onClick={() => this.handleOpenEdit(data, idItem)} 
      className="btn btn-sm btn-outline-secondary">Edit</button>
  )}

  render() {
    const {data : { title, lastEditDate, content }, idItem, idEditing, showConfirmDeleteId} = this.props;
    const isThisItemEditing = (idItem === idEditing);
    return (
      <div className={"card" + (isThisItemEditing ? " shadow" : " shadow-sm")}>
        <div className="card-body">
          <h5 className="card-title mb-1">{title} {this.renderNewFlag(lastEditDate)}</h5>
          <small className="text-muted">Last updated:  {this.renderDateTime(lastEditDate)}</small>
          <p className="card-text mb-1 text-justify">{content}</p>
          <div className="btn-group mt-1 d-block text-right" role="group">
            {this.renderEditBtn(isThisItemEditing)}
            {isThisItemEditing ? "" : <button data-toggle="modal" data-target="#confirmModal"
            type="button" className="btn btn-sm btn-outline-secondary" onClick={() =>showConfirmDeleteId(idItem)}>Delete</button>}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFunc : (deleteId) => dispatch(deleteNote(deleteId)),
    enterEditMode : (noteItem) => {
      dispatch({
        type : actionTypes.TURN_EDIT_ON, 
        itemEdit : noteItem
      })
    },
    showConfirmDeleteId : (noteId) => dispatch({type: actionTypes.ADD_ID_TO_COFIRM_REMOVE, noteId})
  }
}

export default connect(null,mapDispatchToProps)(NoteItem);
