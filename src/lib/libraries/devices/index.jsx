import React from 'react';
import {FormattedMessage} from 'react-intl';
import {defaults} from 'lodash';
import log from '../../log';
import {DeviceType} from '../../device';


import unselectDeviceIconURL from './unselectDevice/unselectDevice.png';

import arduinoUnoIconURL from './arduinoUno/arduinoUno.png';
import arduinoUnoConnectionIconURLL from './arduinoUno/arduinoUno-illustration.svg';
import arduinoUnoConnectionSmallIconURL from './arduinoUno/arduinoUno-small.svg';

import arduinoNanoIconURL from './arduinoNano/arduinoNano.png';
import arduinoNanoConnectionIconURLL from './arduinoNano/arduinoNano-illustration.svg';
import arduinoNanoConnectionSmallIconURL from './arduinoNano/arduinoNano-small.svg';

import esp32IconURL from './esp32/esp32.png';
import esp32ConnectionIconURLL from './esp32/esp32-illustration.svg';
import esp32ConnectionSmallIconURL from './esp32/esp32-small.svg';

import esp32c3IconURL from './esp32c3/esp32c3.png';
import esp32c3ConnectionIconURLL from './esp32c3/esp32c3-illustration.svg';
import esp32c3ConnectionSmallIconURL from './esp32c3/esp32c3-small.svg';

const deviceData = [
    /**
     * Unselect the deivce back to pure scratch mode
     */
    {
        name: (
            <FormattedMessage
                defaultMessage="Unselect device"
                description="Name for the unselect device"
                id="gui.device.unselectDevice.name"
            />
        ),
        deviceId: 'null',
        iconURL: unselectDeviceIconURL,
        description: (
            <FormattedMessage
                defaultMessage="Unselect the device, return to pure realtime programming mode."
                description="Description for the unselect device"
                id="gui.device.unselectDevice.description"
            />
        ),
        featured: true,
        programMode: ['realtime'],
        programLanguage: ['block'],
        tags: ['realtime']
    },
    {
        name: 'Arduino Uno',
        deviceId: 'arduinoUno',
        manufactor: 'arduino.cc',
        learnMore: 'https://store.arduino.cc/usa/arduino-uno-rev3',
        type: DeviceType.arduino,
        iconURL: arduinoUnoIconURL,
        description: (
            <FormattedMessage
                defaultMessage="A great board to get started with electronics and coding."
                description="Description for the Arduino Uno device"
                id="gui.device.arduinoUno.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: arduinoUnoConnectionIconURLL,
        connectionSmallIconURL: arduinoUnoConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their device."
                id="gui.device.arduinoUno.connectingMessage"
            />
        ),
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://store.arduino.cc/usa/arduino-uno-rev3'
    },
    {
        name: 'Arduino Nano',
        deviceId: 'arduinoNano',
        manufactor: 'arduino.cc',
        learnMore: 'https://store.arduino.cc/usa/arduino-nano',
        type: DeviceType.arduino,
        iconURL: arduinoNanoIconURL,
        description: (
            <FormattedMessage
                defaultMessage="The Arduino Nano is a classic small board to build your projects with."
                description="Description for the Arduino Nano device"
                id="gui.device.arduinoNano.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '9600',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: arduinoNanoConnectionIconURLL,
        connectionSmallIconURL: arduinoNanoConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their device."
                id="gui.device.arduinoNano.connectingMessage"
            />
        ),
        programMode: ['realtime', 'upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://store.arduino.cc/usa/arduino-nano'
    },
    {
        name: 'ESP32',
        deviceId: 'arduinoEsp32',
        manufactor: 'espressif',
        learnMore: 'https://www.espressif.com/',
        type: DeviceType.arduino,
        iconURL: esp32IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Wi-Fi & Bluetooth control board with rich functions."
                description="Description for the esp32 device"
                id="gui.device.esp32.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '115200',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: esp32ConnectionIconURLL,
        connectionSmallIconURL: esp32ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their esp32."
                id="gui.device.esp32.connectingMessage"
            />
        ),
        programMode: ['upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/hw-reference/esp32/get-started-devkitc.html'
    },
    {
        name: 'ESP32-C3',
        deviceId: 'arduinoEsp32C3',
        manufactor: 'espressif',
        learnMore: 'https://www.espressif.com/',
        type: DeviceType.arduino,
        iconURL: esp32c3IconURL,
        description: (
            <FormattedMessage
                defaultMessage="Low-cost Wi-Fi SOC control board."
                description="Description for the esp32-c3 device"
                id="gui.device.esp32c3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: false,
        serialportRequired: true,
        defaultBaudRate: '115200',
        internetConnectionRequired: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        connectionIconURL: esp32c3ConnectionIconURLL,
        connectionSmallIconURL: esp32c3ConnectionSmallIconURL,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their esp32-c3."
                id="gui.device.esp32c3.connectingMessage"
            />
        ),
        programMode: ['upload'],
        programLanguage: ['block', 'c', 'cpp'],
        tags: ['arduino'],
        helpLink: 'https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32c3/hw-reference/esp32c3/get-started-devkitc.html'
    },
    /**
     * For those parent devices that exist in VM but are not displayed in GUI
     */
    {
        deviceId: 'arduinoUnoUltra',
        type: DeviceType.arduino,
        featured: true,
        disabled: false,
        hide: true
    },
    {
        deviceId: 'arduinoSE',
        type: DeviceType.arduino,
        featured: true,
        disabled: false,
        hide: true
    },
    {
        deviceId: 'arduinoEsp8266',
        type: DeviceType.arduino,
        featured: true,
        disabled: false,
        hide: true
    }
];

/**
 * Unique event blocks under different programming frameworks.
 */
const eventBlock = {
    [DeviceType.arduino]: '<block type="event_whenarduinobegin"/>',
    [DeviceType.microPython]: '<block type="event_whenmicropythonbegin"/>',
    [DeviceType.microbit]: `<block type="event_whenmicrobitbegin"/>
                                <block type="event_whenmicrobitbuttonpressed"/>
                                <block type="event_whenmicrobitpinbeingtouched"/>
                                <block type="event_whenmicrobitgesture"/>`
};

/**
 * To get real device id. eg: the third party id like ironKit_arduinoUno.
 * @param {string} deviceId - the id of the device.
 * @return {string} deviceId - the real device id.
 */
const analysisRealDeviceId = deviceId => {
    // if the id contain '_' use the string afer the '_'.
    if (deviceId.indexOf('_') !== -1) {
        return deviceId.split('_')[1];
    }
    return deviceId;
};

/**
 * Make device data from the input data. If it is a buid-in device, return the buid-in
 * data. If it is a third party device, find it's parent device, and overwrite its attributes
 * with the input data.
 * @param {string} deviceList - the list of devices.
 * @return {string} fullData - processed data of devices.
 */
const makeDeviceLibrary = (deviceList = null) => {
    let regeneratedDeviceData = [];

    if (deviceList) {
        if (deviceList[0].isOrdered) { // External resources customize the device arrangement
            regeneratedDeviceData.push(deviceData[0]);
        } else {
            deviceList = deviceData.concat(deviceList);
        }

        deviceList.forEach(dev => {
            const realDeviceId = analysisRealDeviceId(dev.deviceId);
            const matchedDevice = deviceData.find(item => realDeviceId === item.deviceId);
            if (matchedDevice) {
                if (realDeviceId !== dev.deviceId) {
                    return regeneratedDeviceData.push(defaults({}, dev, {hide: false}, matchedDevice));
                }
                return regeneratedDeviceData.push(matchedDevice);
            }
            log.warn('Unable to find the corresponding built-in device:', dev.deviceId);
            return;
        });
    } else {
        regeneratedDeviceData = deviceData;
    }

    return regeneratedDeviceData;
};

export {
    deviceData as default,
    eventBlock,
    makeDeviceLibrary
};
