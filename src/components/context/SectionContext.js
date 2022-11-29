// import React, {useMemo, useState, useEffect} from 'react';
// import adminPathList from '../../helpers/adminPathList'
// // import adminPathList from 'helpers/adminPathList'
// // import agentPathList from 'helpers/agentPathList'
// import { useRouter } from 'next/router';

// export const SectionContext = React.createContext({})

// export const SectionProvider = ({children}) => {
//     const [section, setSection] = useState()
//     const [loadingSection, setLoadingSection] = useState(true)
//     const router = useRouter()
//     const path = router.pathname

//     useEffect(() => {
//         const splitUrl = path.split('/')
//         if(splitUrl[1] !== section){
//             setSection(splitUrl[1])
//         }
//         setLoadingSection(false)
//     }, [path, section])

//     const getPathList = useMemo(() => () => {
//         switch(section){
//             case 'admin':
//                 return customerpathList
//             // case 'admin':
//             //     return adminPathList
//             default:
//                 return adminPathList
//         }
//     }, [section])

//     const switchSection = (sectionName) => setSection(sectionName)

//     const value = {
//         getPathList,
//         switchSection,
//         section,
//         loadingSection
//     }

//     return(
//         <SectionContext.Provider value={value}>
//             {children}
//         </SectionContext.Provider>
//     )
// }