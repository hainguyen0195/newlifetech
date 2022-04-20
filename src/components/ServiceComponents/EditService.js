import React, { Children } from "react";
import {db,storage} from "../../config";
import ServiceItrem from '../../components/ServiceComponents/ServiceItem';

import { collection ,doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL ,deleteObject } from "firebase/storage";

class EditService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            service:'',
            id:'',
            name:'',
            des:'',
            photo:'',
            pathImageOld:'',
            pathImage:'',
            nameImage:'',
        };
        this.handlChangeName=this.handlChangeName.bind(this);
        this.handlChangeDes=this.handlChangeDes.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangephoto=this.handleChangephoto.bind(this);
        this.getData('services', 'ZVp07NipsptghsEfFa1D');
    }

    getData = async (coll, id,match) => {
      
        const snap = await getDoc(doc(db, coll, id))
        const stringPathImage= snap.data().photo;
        const pathimageold= stringPathImage.slice(stringPathImage.lastIndexOf("/o/")+3, stringPathImage.lastIndexOf("?")).replace('%2F','/');
        
        if (snap.exists()) {
            this.setState({
                service: snap.data(),
                name:snap.data().name,
                des:snap.data().des,
                pathImageOld:pathimageold,
                pathImage:snap.data().pathImage,
                nameImage:snap.data().nameImage,
                id:snap.id
            })
        }
        else {
            console.log("No such document")
        }
    }

    handlChangeName (event) {
        this.setState({name: event.target.value});
    }

    handlChangeDes (event) {
        this.setState({des: event.target.value});
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
       
        if(!errorbase){
            let name = this.state.name;
            let des = this.state.des;
            
            if(this.state.images){
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
                            // delete image old 
                            const storage = getStorage();

                            const pathimageold= this.state.pathImageOld;
                            console.log(pathimageold);
                            const desertRef = ref(storage, pathimageold);
                            deleteObject(desertRef).then(() => {
                                alert('delete image old ok');
                            }).catch((error) => {
                                alert('Uh-oh, an error occurred!');
                            });

                            //update data
                            this.setState({photo: url});
                            db.collection("services").doc("ZVp07NipsptghsEfFa1D").update({
                                name:name,
                                des:des,
                                photo:this.state.photo,
                                pathImage:'images-service',
                                nameImage:this.state.images.name,
                            }).then(()=>{
                                alert('update ok (image) ');
                            })
                        })
                    }
                )
            }else{
                db.collection("services").doc("ZVp07NipsptghsEfFa1D").update({
                    name:name,
                    des:des,
                    pathImage:'/images-service',
                    nameImage:this.state.images.name,
                }).then(()=>{
                    alert('update ok');
                })
            }
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
                    <div className="row">
                        <ServiceItrem class='col-md-4 col-sm-6 col-xs-12' service={this.state.service}/>
                        <div className="col-xs-8">
                            <h1>Edit new srvice here</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-row row">
                                <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input
                                    type="text"
                                    ref="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handlChangeName}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Des</label>
                                    <input
                                    type="text"
                                    ref="des"
                                    className="form-control"
                                    placeholder="Name"
                                    value={this.state.des}
                                    onChange={this.handlChangeDes }
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>photo</label> <br />
                                    <input
                                    type="file"
                                    ref="photo"
                                    onChange={this.handleChangephoto}
                                    />
                                </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                Save Edit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default EditService;

