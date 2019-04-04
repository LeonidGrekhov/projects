import React, { Component } from "react";
import { Link } from "react-router-dom";
import  './Sidebar.css';
let DeparmentsList = {
    data:[{
        departmentName:'a',
        departmentCollege:[{
            collegeQuery: 'ads',
            collegeName: 'asd'
        },
        {
            collegeQuery: 'ads',
            collegeName: 'asd'
        },
        {
            collegeQuery: 'ads',
            collegeName: 'asd'
        }
    ]},
    {
        departmentName:'b',
        departmentCollege:[{
            collegeQuery: 'ads',
            collegeName: 'asd'
        },
        {
            collegeQuery: 'ads',
            collegeName: 'asd'
        },
        {
            collegeQuery: 'ads',
            collegeName: 'asd'
        }
    ]

    }
]
}


class Sidebar extends Component {
    

      onSearchMacro = event => window.location = `/search/${event.target.name}/page/1`;

    render() {
        console.log(DeparmentsList)
    return (
        
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>San Francisco State Univercity</h3>
            </div>
    
            <ul class="list-unstyled components">
                <p>Deparments</p>
                {
                    DeparmentsList.data.map( (department, i) => (
                        <li key={i}>
                            <a href={
                                `#${department.departmentName}Submenu`
                                } data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">{department.departmentName}</a>
                            <ul class="collapse list-unstyled" id={`${department.departmentName}Submenu`}>
                            {department.departmentCollege.map( (college, i) => (
                                <li key={i}>
                            <a onClick={this.onSearchMacro} name={college.collegeQuery} >{college.collegeName}</a>
                        </li>
                            ))}
                            
                        </ul>
                        </li>
                    ))
                }
            </ul>
        </nav>
    
    
    );
  }
}
export default Sidebar;
