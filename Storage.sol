//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/*contract Greeter {
    string private greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greetz() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
*/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

///contract Storedb {
  
//string   message;


    //function get() public view returns{
    //  message;  
    //}
    
     //function set(string calldata _message){
     //  message=  _message;
  //  }
    
//}*/

contract Storage {
   string _message ="Smart contract with React";
   
   function get() public view returns (string memory){
       return _message;
   }

   function set(string memory message) public{
    _message = message;    
   }

}