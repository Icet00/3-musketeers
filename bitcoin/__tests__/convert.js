'use strict';

const convert = require('..');
const Big = require('big.js');

test('should convert Bitcoin to Bitcoin', () => {
  var value = convert(2, 'BTC', 'BTC');
  expect(value).toBe(2);
});

test('should convert null to Bitcoin', () => {
  function convertTo()
  {
    convert(2, null, 'BTC');
  }
  
  expect(convertTo).toThrowError();
});

test('should convert Bitcoin to null', () => {
  function convertTo()
  {
    convert(2, 'BTC', null);
  }
  
  expect(convertTo).toThrowError();
});

test('should convert Bitcoin to Bitcoin with representaion Number', () => {
  var value = convert(2, 'BTC', 'BTC', 'Number');
  expect(value).toBe(2);
});

test('should convert Bitcoin to Bitcoin with representaion Big', () => {
  var value = convert(2, 'BTC', 'BTC', 'Big');
  expect(value).toEqual(Big(2));
});

test('should convert Bitcoin to Bitcoin with representaion String', () => {
  var value = convert(2, 'BTC', 'BTC', 'String');
  expect(value).toBe("2");
});

test('should convert null from Bitcoin to Bitcoin', () => {
  let value = convert(NaN, 'BTC', 'BTC');
  expect(value).toBe(NaN);
});

test('should convert null from Bitcoin to Bitcoinwith representaion Big', () => {
  function convertTo()
  {
    convert(NaN, 'BTC', 'BTC', 'Big');
  }
  expect(convertTo).toThrowError();
});

test('should convert null from Bitcoin to Bitcoinwith representaion String', () => {
  let value = convert(NaN, 'BTC', 'BTC', 'String');
  expect(value).toBe("NaN");

});

test('should add a prefix', () => {
  let unit = "abc";
  convert.addUnit(unit,0.5);
  let units = convert.units();
  let length = units.length;
  expect(units.indexOf(unit)).toBe(6);
  expect(length).toBe(7);
});

test('should add a already existing prefix', () => {
  let unit = "abc";
  function addAlreadyAddedUnitWithDifferentRate() {
      convert.addUnit(unit,2);
    }

  expect(addAlreadyAddedUnitWithDifferentRate).toThrowError();
});

test('should delete a prefix', () => {
  let unit = "abc";
  convert.removeUnit(unit);
  let units = convert.units();
  expect(units.indexOf(unit)).toBe(-1);
  let length = units.length;
  expect(length).toBe(6);
});

test('should delete a predefined prefix', () => {
  let unit = "BTC";
  
  function removePredefinedUnit() {
    convert.removeUnit(unit);
  }
  // Test the exact error message
  expect(removePredefinedUnit).toThrowError();
});


/*
test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  throw new Error('test not yet defined... write your test here');
});

test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  throw new Error('test not yet defined... write your test here');
});

test('should convert an integer', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  throw new Error('test not yet defined... write your test here');
});

test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  throw new Error('test not yet defined... write your test here');
});

test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  throw new Error('test not yet defined... write your test here');
});

test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  throw new Error('test not yet defined... write your test here');
});
*/