import React, { useState, useEffect }  from 'react'
import { Button } from "@mui/material"
// import { BarCodeScanner } from 'expo-barcode-scanner'

export const ScanProduct = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [text, setText] = useState('Not scanned yet')

    const askForCameraPermission = () => {
        (async () => {
            // const {status} = await BarCodeScanner.requestPermissionsAsync()
            // setHasPermission(status == 'granted')
        })()
    }

    useEffect(() => {
        askForCameraPermission()
    }, [])

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true)
        setText(data)
        console.log('Type: ' + type + '\nData ' + data)
    }

    if (hasPermission === null) {

        return(
            <div style={styles.container}>
                <p>Permission requise pour utiliser la caméra</p>
            </div>
        )

    } else if (hasPermission === false) {

        return(
            <div style={styles.container}>
                <p style={{margin: 10}}>Pas d'accès à la caméra</p>
                <Button title={'Allow camera'} onClick={() => askForCameraPermission()}/>
            </div>
        )

    }

    return(
        <div style={styles.container}>
            <div style={styles.barcodebox}>
                {/* <BarCodeScanner 
                 onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                 style={{height: 400, width: 400}}
                 /> */}
            </div>
            <p style={styles.maintext}>{text}</p>

            {scanned && <Button title={'Scan again ?'} onClick={() => setScanned(false)} color='tomato'/>}
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    barcodebox: {
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
    },

    maintext: {
        fontSize: 16,
        margin: 20
    }
}