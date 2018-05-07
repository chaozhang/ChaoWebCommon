// header data
import React from 'react'
import gitRepo from '../../data/gitRepo'


const repoName = 'ChaoWebCommon';

const headerData = {
    repo: `${gitRepo.url}/${repoName}`,
    issues: `${gitRepo.url}/${repoName}/issues/new`,
    logo: <div className='img'></div>
};


export default headerData