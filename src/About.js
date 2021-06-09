
import { React, Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'React Simple CRUD Application',
            act: 0,
            index: '',
            datas: []
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
        let phone = this.refs.phone.value;

        if (this.state.act === 0) {   //new
            let data = {
                name, address, phone
            }
            datas.push(data);
        } else {                      //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
            datas[index].phone = phone;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;
        this.refs.phone.value = data.phone;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.name.focus();
    }
    render() {
        let datas = this.state.datas;
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <div className="container">
                    <form ref="myForm" className="myForm">

                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>USERNAME</label>
                                    <input type="text" className="form-control" ref="name" placeholder="USERNAME" />

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>ADDRESS</label>
                                    <input type="text" className="form-control" ref="address" placeholder="ADDRESS" />
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label>PHONE NUMBER</label>
                                    <input type="text" className="form-control" ref="phone" placeholder="PHONE" />
                                </div>
                            </div>





                        </div>
                        <div className="text-center">

                            <button onClick={(e) => this.fSubmit(e)} className="myButton btn btn-primary mt-4 mb-3">submit </button>
                        </div>

                    </form>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">USERNAME</th>
                                <th scope="col">ADDRESS</th>
                                <th scope="col">PHONE</th>
                                <th scope="col">ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, i) =>
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.phone}</td>
                                    <td><button onClick={() => this.fRemove(i)} className="myListButton btn-primary mr-3">remove </button>
                                        <button onClick={() => this.fEdit(i)} className="myListButton btn-primary">edit </button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                </div>



            </div>
        );
    }
}
