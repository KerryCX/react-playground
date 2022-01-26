import React from 'react'

export const ChildComponent = ({parentToChild, childToParent}) =>{
//if using functional component, simply catch the parentToChild in the parameters.
    const childData = "This is data from Child Component to the Parent Component."
    return (
        <div>
            {parentToChild}
            <button onClick={() => childToParent(childData)}>Click Child</button>
        </div>
    );
}