# react-list
A simple react component that lists out a bunch of Links as a UL

### Usage
```
import React, { Component } from 'react'
import List from 'react-list'

let items = [
    {title: "Google", url: "http://www.google.com"}
    {title: "Facebook", url: "http://www.facebook.com"}
    {title: "Twitter", url: "http://www.twitter.com"}
];

class Foo extends Component {
    render() {
        return (
            <List links={items} />
        );
    }
}


// Renders
<ul>
    <a href="http://www.google.com"></li>Google</li></a>
    <a href="http://www.facebook.com"></li>Facebook</li></a>
    <a href="http://www.twitter.com"></li>Twitter</li></a>
</ul>

```

### Todo

- refactor code to remove link dependency
- tests

