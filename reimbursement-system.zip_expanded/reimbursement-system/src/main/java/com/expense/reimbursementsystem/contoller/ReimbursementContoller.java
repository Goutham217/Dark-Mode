package com.expense.reimbursementsystem.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.reimbursementsystem.exception.ApplicationException;
import com.expense.reimbursementsystem.exception.EmployeeNotFoundException;
import com.expense.reimbursementsystem.pojo.ReimbursementPojo;
import com.expense.reimbursementsystem.service.ReimbursementService;

@CrossOrigin
@RestController
@RequestMapping("reimbursement")
public class ReimbursementContoller {

	@Autowired
	ReimbursementService reimbursementService;

	// http://localhost:5555/reimbursement/2
	@GetMapping("/{eID}")
	public List<ReimbursementPojo> viewEmployeeRequests(@PathVariable("eID") int employeeId)
			throws ApplicationException, EmployeeNotFoundException {
		return reimbursementService.viewEmployeeRequests(employeeId);
	}

	// http://localhost:5555/reimbursement/status/pending
	// or
	// http://localhost:5555/reimbursement/status/approve
	@GetMapping("status/{status}")
	public List<ReimbursementPojo> getReimbursementsByStatus(@PathVariable("status") String status)
			throws ApplicationException {
		return reimbursementService.getReimbursementsByStatus(status);
	}
	
	@PostMapping("submitrequest")
	public ReimbursementPojo submitReimbursement(@RequestBody ReimbursementPojo reimbursementPojo) throws ApplicationException {
		return reimbursementService.submitInfo(reimbursementPojo);
	}
	
//	@PostMapping("/{rid}")
//	public List<ReimbursementPojo> submitReimbursement(@PathVariable("rid") int employeeId)
//			throws ApplicationException {
//		return reimbursementService.submitInfo(employeeId);
//	}
//	
  
	@PutMapping("changestatus")
	public ReimbursementPojo updateReimbursement(@RequestBody ReimbursementPojo reimbursementPojo) throws ApplicationException{
		return reimbursementService.updateReimbursement(reimbursementPojo);
	}


}
