import React from 'react'
import { ChildComponent } from './Child.jsx';
import { useState } from 'react';

export const ParentComponent = () =>{

    const [parentData, setData] = useState('');
    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }
    const [childData, setChildData] = useState('')
    const childToParent = (sendData) => {
        setChildData(sendData);
    }
    return (
        <div>
            {childData}
            <ChildComponent
                parentToChild={parentData}
                childToParent={childToParent}
            />
            <div>
                <button onClick={() => parentToChild()}>Click Parent</button>
            </div>
        </div>
    );
}

