import React from "react";
import "../../assets/css/all-jobs.css";

class AllJobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("AllJobs");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
      <div>
        <div className="all-jobs">
          <div className="container">
            <div className="row justify-content-center">

                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Company</th>
                        <th>Owner</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Number</th>
                        <th>City</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Sample</td>
                        <td>Jacky</td>
                        <td>adomjacky@gmail.com</td>                       
                        <td>www.sample.com</td>
                        <td>+1334991276</td>
                        <td>Chicago</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dummy</td>
                        <td>Semth</td>
                        <td>johnsemth@gmail.com</td>
                        <td>www.dummy.com</td>
                        <td>+1300277811</td>                       
                        <td>Houston</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Solution</td>
                        <td>Jorg</td>
                        <td>ancy@gmail.com</td>
                        <td>www.solution.com</td>
                        <td>+1233003487</td>
                        <td>Philadelphia</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Teck</td>
                        <td>Amy</td>
                        <td>rocky@gmail.com</td>
                        <td>www.teck.com</td>
                        <td>+1800158813</td>
                        <td>Phoenix</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Dummy</td>
                        <td>Semth</td>
                        <td>johnsemth@gmail.com</td>
                        <td>www.dummy.com</td>
                        <td>+1300277811</td>                       
                        <td>Houston</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Sample</td>
                        <td>Jacky</td>
                        <td>adomjacky@gmail.com</td>                       
                        <td>www.sample.com</td>
                        <td>+1334991276</td>
                        <td>Chicago</td>
                        <td>
                          <a className="far fa-edit mr-4 text-success"></a>
                          <a className="fas fa-trash-alt text-danger"></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllJobs;
