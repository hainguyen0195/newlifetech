import React, { Children } from "react";
import {db,storage} from "../../config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class AddService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        des:'',
        images:'',
      id:[],
      services: [],
      photo:'',
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChangephoto=this.handleChangephoto.bind(this);
  }

  handleChangephoto = e => {
    this.setState({images: e.target.files[0]});
  }
  handleSubmit = (event) => {
    //console.log(this.state.images)
    event.preventDefault();
    //lay value
    const errorbase=false;
    if(this.state.name==''){
        alert('name null');
        errorbase=true;
    }
    if(this.state.des==''){
        alert('des null');
        errorbase=true;
    }
    if(this.state.images==''){
      alert('image null');
      errorbase=true;
    }
    if(!errorbase){
      let name = this.refs.name.value;
      let des = this.refs.des.value;
      const uploadTask = storage.ref(`images-service/${this.state.images.name}`).put(this.state.images);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        async ()=> {
          await storage
            .ref('images-service')
            .child(this.state.images.name)
            .getDownloadURL()
            .then(url=>{
              this.setState({photo: url});
             
              db.collection('services').add({
                name:name,
                des:des,
                photo:this.state.photo,
              })
              .then(()=>{
                alert('insert ok');
              })
            })
        }
      )
    }

    this.refs.name.value = "";
    this.refs.des.value = "";
    this.refs.photo.value = "";
  };
  render() {
    //const { developers } = this.state;
    //console.log(developers);
    return (
      <>
        <div className="padding">
        <div className="wrap-content">
            <h1>Add new srvice here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row row">
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e)=> {this.setState({name:e.target.value})} }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Des</label>
                    <input
                      type="text"
                      ref="des"
                      className="form-control"
                      placeholder="Name"
                      onChange={(e)=> {this.setState({des:e.target.value})} }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>photo</label>
                    <input
                      type="file"
                      ref="des"
                      onChange={this.handleChangephoto}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
        </div>
        </div>
      </>
    );
  }
}

export default AddService;

