//SPDX-Licence-Identifier: MIT
//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

contract voting{

    struct cand {
        uint candid;
        string candname;
        uint vcount;
    }

    uint public candscount;   // 0

    mapping(address => bool) public voters;

    mapping(uint => cand) public cands;

    event vevent(
        uint indexed _cid
    );

    

    constructor(){
        addcand("DMK");
        addcand("ADMK");
    }

    function addcand(string memory _name)public {
        candscount++;
        cands[candscount]=cand(candscount,_name,0);
    }

    function castevote(uint _cid) public{

        require(!(voters[msg.sender]));

        require(_cid>0 && _cid<=candscount);

        voters[msg.sender]=true;

        cands[_cid].vcount ++;

        emit vevent(_cid);


    }
}
