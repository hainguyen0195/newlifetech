import React, { Children } from "react";
import {db,storage} from "./config";

import { collection, query, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class Firedata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
      images:'',
      photo:'',
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChangephoto=this.handleChangephoto.bind(this);

    this.getData();
  }

  getData = async () => {
    const q = query(collection(db, "developers"));
    let querySnapshot = await getDocs(q);
    const listdev=[];
    querySnapshot.forEach((doc) => {
      console.log(doc);
      let newsdev = doc.data();
      listdev.push(newsdev);
      this.setState({developers: listdev})
    });

    // getDocs(q).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // }).catch(err => console.error(err))
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
    if(this.state.images==''){
      alert('image null');
      errorbase=true;
    }
    if(!errorbase){
      let name = this.refs.name.value;
      
      const uploadTask = storage.ref(`images/${this.state.images.name}`).put(this.state.images);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        async ()=> {
          await storage
            .ref('images')
            .child(this.state.images.name)
            .getDownloadURL()
            .then(url=>{
              this.setState({photo: url});
              db.collection('developers').add({
                name:name,
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
    this.refs.photo.value = "";
  };
  render() {
    //const { developers } = this.state;
    //console.log(developers);
    return (
      <>
        <div className="wrap-content">
            <h1>List developers</h1>
            <div>
                  {this.state.developers.map(dev => {
                  return  <div className="col-md-3 col-sm-4 col-xs-6" key={dev.id}>
                               <h3 className="name-title">
                                    name: {dev.name}
                                </h3>
                               <h5 className="dev-title">
                                    <img src={dev.photo} />
                                </h5>
                          </div>
                  })}
            </div>
            
            <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
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
                    <label>Role</label>
                    <input
                      type="file"
                      onChange={this.handleChangephoto}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
        </div>
      </>
    );
  }
}

export default Firedata;

