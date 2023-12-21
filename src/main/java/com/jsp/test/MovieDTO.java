package com.jsp.test;

public class MovieDTO {
	private int id;
	private String name;
	private ProdDTO prod;
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public ProdDTO getProdid() {
		return prod;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setProdid(ProdDTO prodid) {
		this.prod = prodid;
	}
}
