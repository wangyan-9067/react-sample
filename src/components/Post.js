import React, { Component } from 'react';

export default function Post({ title, index }) {
    return (
        <div>{`Post ${index}: ${title}`}</div>
    );
}
